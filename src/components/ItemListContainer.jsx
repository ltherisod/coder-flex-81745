import { getProducts } from "../mock/asyncData"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = (props)=> {
    const [data, setData]= useState([])
    
    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=> console.log(error))
    },[])

   
    
    console.log('ItemListContainer', data)

    
    return(
        <div>
            <h1>{props.mensaje}</h1>
        
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer