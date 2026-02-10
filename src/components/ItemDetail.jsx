import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {
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
        <p>Stock: {detail.stock} unidades disponibles</p>
        <ItemCount stock={detail.stock}/>
    </div>
  )
}

export default ItemDetail