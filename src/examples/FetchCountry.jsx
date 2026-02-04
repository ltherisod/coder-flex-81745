import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const FetchCountry = () => {
    const {data, loading, error}= useFetch('https://restcountries.com/v3.1/name/chile')
    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/name/chile')//pedir datos
    //     .then((res)=> res.json())//traducir
    //     .then((data)=> console.log(data[0].flag))//acceder a los datos, guarda la data.
    //     .catch((error)=> console.log(error))//atrapamos el error
    // },[])
    console.log({
        data: data && data[0]?.flag,
        loading: loading,
        error: error
    })
  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry