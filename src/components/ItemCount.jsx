import { useState} from "react"

const ItemCount = (props)=> {
    const [count, setCount]= useState(1)
   
  
   

    const sumar = ()=> {
        if(count < props.stock){
            setCount(count + 1)
        }
       
    }
        const restar = ()=> {
        if(count > 0){
            setCount(count - 1)
        }
        
    }

    const shop = ()=> {
       props.onAdd(count)
    }


   

    return(
                <>
                {
                    props.stock > 0
                    ? <div className="counter-container">
                                <div className="counter-controls">
                                    <button className="btn btn-danger" onClick={restar}>-</button>

                                    <span className="counter-value">{count}</span>

                                    <button className="btn btn-success" onClick={sumar}>+</button>
                                </div>

                                {/* <button className="btn btn-primary buy-btn" onClick={shop}>
                                    Comprar
                                </button> */}
                                <button className="btn btn-primary buy-btn" disabled={count === 0 || props.stock === 0} onClick={()=>props.onAdd(count)}>
                                    Comprar
                                </button>
                        </div>
                        :<p>Lo sentimos no tenemos stock 😭</p>
                }
                </>
    )
}
export default ItemCount