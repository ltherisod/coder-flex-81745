import {createContext, useEffect, useState} from 'react'

// 1. creamos el contexto (cajita vacia)
export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []

//2. crear al proveedor

export const CartProvider = ({children})=> {
    //herramietas (funciones y datos)
    const [cart, setCart]= useState(carritoLS)

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    //agregar un item al carrito tiene que contemplar repetidos (ITEM DETAIL)
    const addItem = (item, qty)=> {
        // console.log(item, qty)
        // console.log({...item, quantity:qty})
        if(isInCart(item.id)){
            //ya existe, modificar la cantidad 
            setCart(
                cart.map((prod)=> {
                    if(item.id === prod.id){
                        //sumo cantidades
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        //no modifico
                        return prod
                    }
                })
            )
          
        }else{
            //no existe, lo agrego
            setCart([...cart,{...item, quantity:qty}])
        }
    }

    //borrar el carrito entero (CART VIEW Y CHECKOUT)
    const clear = ()=> {
        setCart([])
    }

    //elimine un item del carrito (CARTVIEW)

    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    
    //retornar in bool (context)
    const isInCart = (id)=> {
        return cart.some(( prod)=> prod.id === id)
    }

    //total a pagar
        const total = ()=> {
            return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity), 0)
        }
          //OPCIONAL total a pagar C/ IMP
        const totalConImp = ()=> {
            return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity), 0.5)
        }

    //total de items
        const totalQty = ()=> {
            return cart.reduce((acc, prod)=> acc += prod.quantity,0)
        }


    //OPCIONAL
    const itemQty = (id)=> {
        const itemIn = cart.find((prod)=> prod.id === id)
        if(itemIn){
            return itemIn.quantity
        }else{
            return 0
        }
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, itemQty, totalQty, total}}>
            {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}