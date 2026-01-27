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

    // let error = false
    // const miPromesa = new Promise ((resolve, reject)=> {
    //     if(error){
    //         reject('No hay hamburguesas')
    //     }else{
    //         resolve('MacNifica! 🥳')
    //     }
    // })

    // console.log(miPromesa, 'promesa')
    
    console.log('ItemListContainer', data)

    // miPromesa.then((res)=> console.log(res, 'respuesta')).catch((error)=> console.log(error, 'error'))
    return(
        <div>
            <h1>{props.mensaje}</h1>
            {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer