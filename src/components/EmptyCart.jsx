import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Tu carrito esta vacio! 😱</h1>
        <h2>Te invitamos a ver nuestros productos</h2>
        <Link className='btn btn-dark' to='/'>Ir a home</Link>
    </div>
  )
}

export default EmptyCart