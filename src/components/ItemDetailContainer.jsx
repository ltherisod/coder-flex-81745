import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncData'
import { useParams } from 'react-router-dom'
import { Loader } from './Loader'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    const [loading, setLoading]= useState(true)
    // const param =useParams()
    console.log('ItemDetailContainer')
      const{id} =useParams()
    console.log(id)
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])
  return (
    <div>
       {loading ? <Loader text='Cargando detalle...'/> : <ItemDetail detail={detail} />}
    </div>
  )
}

export default ItemDetailContainer