import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, removeItem, clear, total}= useContext(CartContext)


const preConfirm = ()=> {
    Swal.fire({
       title :'¿Estas seguro de borrar todo el carrito?',
       text:'Se va a perder toda la compra',
       icon:'question',
       showCancelButton:true,
       cancelButtonText:'No',
       confirmButtonText:'Si'
    }).then((result)=>{
        if(result.isConfirmed){
            clear()
        }
    })
}

  return (
    <div>
        <h1>Tu carrito 🛒</h1>
        <div>
            {
                // cart.map((compra)=> <CartItem compra={compra} key={compra.id}/>)
                cart.map((compra)=> (
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                        <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>cantidad: {compra.quantity}</span>
                        <span>precio final: ${compra.quantity * compra.price}, 00</span>
                        <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        {/* FALTA HACER */}
        <span>Total a pagar: ${total()},00</span>
         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
        <button className='btn btn-danger' onClick={preConfirm}>Vaciar Carrito</button>
        <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
    </div>
    </div>
  )
}

export default CartView