
//4. CUANDO QUIERO USAR UN CONTEXTO IMPORTO EL HOOK PARA USAR EL CONTEXT Y EL CONTEXTO QUE QUIERO USAR
import {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



const ItemDetail = ({detail }) => {
  const [purchase, setPurchase]= useState(false)
const {cart, addItem, itemQty} = useContext(CartContext)

  const onAdd = (cantidad)=> {
    Swal.fire(
      {
        position:'top-end',
        icon:'success',
        title:`Agregaste ${detail.name} al carrito`,
        showCancelButton:false,
        showConfirmButton:false,
        timer:1000
      }
    )
    addItem(detail, cantidad)
    setPurchase(true)
    
  }

  const stockActualizado = detail.stock - itemQty(detail.id)

  return (
     <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <h2> Detalle de {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock: {stockActualizado} unidades disponibles</p>
       {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail