import { useEffect } from "react"


//ES LA FUNCION DEL HOC
export const withLogging = (WrappedComponent)=> {
    //Este es el nuevo componente que se crea cuando se llama al HOC
    const ComponentWithLogging = (props)=> {
        //EFECTO DE MONTAJE, QUE SE EJECUTE CUANDO EL COMPNENTEN APARECE EN PANTALLA
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó 🥳`)
        },[])
        //Mostrar el coponente original con todas sus props
        return <WrappedComponent {...props}/>

    }

    //Devolvemos el nuevo componente

    return ComponentWithLogging

}