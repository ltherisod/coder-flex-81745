import React, { useContext, useState } from 'react'
import {CartContext} from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {db} from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const CheckoutRHF = () => {  
      const [loading, setLoading]= useState(false)
     const [orderId, setOrderId]= useState('')
     const {cart, total, clear}= useContext(CartContext)
     const {register, handleSubmit, formState:{errors}, getValues}= useForm()

     console.log('errors', errors)



const finalizarCompra = (data)=> {
    const {name, lastname, address, email}= data
    setLoading(true)
     let order = {
        comprador: {
            name, lastname, address, email
        },
        compras:cart,
        total:total(),
        fecha:serverTimestamp()
    }
   //creamos ref
   const orderColl = collection(db, "orders")
   //agregar el doc
   addDoc(orderColl, order)
   .then((res)=> {
    setOrderId(res.id)
    //borro el carrito
    clear()
   })
   .catch((error)=> console.log(error))
   .finally(()=> setLoading(false))
   
}

if(!cart.length && !orderId){
    return <EmptyCart/>
}

  return (
   <>
   {
    orderId 
    ?<div>
        <h1>Muchas gracias por tu compra! 🥳</h1>
            <h3>Su orden es: {orderId}</h3>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
    :  <div>
        <h1>Completa los campos para terminar la compra</h1>
      
         <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(finalizarCompra)} >
                <input name='name' placeholder='Ingrese su nombre' className='form-control' type="text"  {...register("name", {required:true, minLength:3})} />
                {errors?.name?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                {errors?.name?.type === "minLength" && <small style={{color:'red'}}>El nombre debe contener mínimo 3 caracteres</small>}
                <input name='lastname' placeholder='Ingrese su apellido' className='form-control' type="text" {...register("lastname", {required:true, minLength:2})}/>
                 {errors?.lastname?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                {errors?.lastname?.type === "minLength" && <small style={{color:'red'}}>El apellido debe contener mínimo 2 caracteres</small>}
                <input name='address' placeholder='Ingrese su dirección' className='form-control' type="text"  {...register("address", {required:true, minLength:10, maxLength:35})} />
                {errors?.address?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                {errors?.address?.type === "minLength" && <small style={{color:'red'}}>La dirección debe ser completa</small>}
                 {errors?.address?.type === "maxLength" && <small style={{color:'red'}}>La dirección es demasiado larga</small>}
                <input name='email' placeholder='Ingrese su correo' className='form-control' type='email'  {...register("email", {required:true})}/>
                {errors?.email?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                <input name='secondemail' placeholder='Repita su correo' className='form-control' type="email"  {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
                {errors?.secondemail?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                {errors?.secondemail?.type === "equalsMails" && <small style={{color:'red'}}>Los correos deben ser iguales</small>}
                <button type='submit' className='btn btn-success' disabled={loading} >{loading ? 'Procesando Compra...' : 'Generar Orden'}</button>
</form>
    </div>
   }
   </>
  )
}

export default CheckoutRHF