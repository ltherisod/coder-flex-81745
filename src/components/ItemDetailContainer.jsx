import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncData'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    useEffect(()=>{
        getOneProduct('02')
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer