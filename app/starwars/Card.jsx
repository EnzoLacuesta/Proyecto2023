'use client'
import React, { useEffect, useState } from 'react'
import style from './SW.module.css'

const API_SW = 'https://swapi.dev/api/people'

const Card = () => {

    const [PeopleSW, setPeopleSw] = useState([])
    const [search, setSearch] = useState ('');
    
    //Funcion de busqueda, busca capturar los valores que el usuario ingresa en el input 
    //Se desencadena la funcion cada vez que hay un cambio en el input OnChange
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    //Metodo de filtrado
    let resultado = []
    if(!search){
        resultado = PeopleSW
    }else{
        resultado = PeopleSW.filter( (dato) => 
        dato.name.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(()=>{
        fetch(API_SW)
        .then(res => res.json())
        .then(data => 
            setPeopleSw(data.results)
        )
    },[])

  return (
    <div>
        <input 
            type="text" 
            placeholder='Busca tu personaje favorito' 
            className={style.inpSW}
            value = {search} 
            onChange={searcher}
            />

        <div className={style.ContCard}>        
            {resultado.map(data =>(
                <div key={data.name} className={style.Card}>
                    <p>{data.name}</p>
                    <p>{data.gender}</p>               
                </div>
                ))}
        
        </div>
    </div>

  )
}

export default Card