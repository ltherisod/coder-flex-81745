import { useState, useEffect } from "react"

const ItemCount = (props)=> {
    const [count, setCount]= useState(1)
    const [comprar, setComprar]= useState(false)
    // const [variableDeEstado, FuncionModificadora ]=useState(valor por defecto)
    console.log('itemCount')

    const sumar = ()=> {
        if(count < props.stock){
            setCount(count + 1)
        }
        // setCount((prev)=> prev + 1)
    }
        const restar = ()=> {
        if(count > 0){
            setCount(count - 1)
        }
        
    }

    const shop = ()=> {
        setComprar(!comprar)
    }


    // useEffect(()=>{
    //     //codigo

    //     //fetch
    //     //cambiar un estado
    //     //timer
    //     //console.log
    // },[array de dependencias])



    //SIN ARRAY DE DEPENDENCIAS
    //SE EJECUTE SIEMPRE
    //USO: CASI NUNCA/NUNCA
    useEffect(()=>{
        console.log('ME EJECUTO SIEMPRE, EN CADA RENDER')
    })


    //CON EL ARRAY DE DEPENDENCIAS VACIO
    //SE EJECUTE CUANDO EL COMPONENTE SE MONTA // UNA SOLA VEZ
    //USO: CASI SIEMPRE // LLAMADOS A APIS//CARGAR INFO INCIAL
    useEffect(()=>{
        console.log('ME EJECUTO CUANDO SE MONTA EL COMPONENTE, UNA SOLA VEZ')
    },[])


    //CON EL ARRAY DE DEPENDENCIAS CON DATOS
    //SE EJECUTA CUANDO MONTA EL COMPONENTE Y ESTA A LA ESCUCHA DE UN CAMBIO PARA VOLVER A EJECUTARSE
    //USO: CASI SIEMPRE // FILTROS// VALIDACIONES//LLOGGINS//VOLVER A PEDIR DATOS

 useEffect(()=>{
        console.log('ME EJECUTO CUANDO SE MONTA EL COMPONENTE, Y SIEMPRE QUE COMPRAR CAMBIE', comprar)
    },[comprar])

    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={shop}>Comprar</button>
        </div>
    )
}
export default ItemCount