const BotonMultiuso = (props)=> {
    console.log(props)
    const {color, children}= props
    return(
        <button style={{
            padding:"10px 16px",
            border:"none",
            borderRadius:"8px",
            color:'white',
            backgroundColor:color
        }}
        disabled={props.disabled}
        onClick={props.onClickHandler}
        >
           {children}
        </button>
    )
}

export default BotonMultiuso