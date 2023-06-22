'use client'
import React, { useEffect, useState } from 'react'
import style from './SW.module.css'

const API_SW = 'https://swapi.dev/api/people'

const Card = () => {

    const [PeopleSW, setPeopleSw] = useState([])
    const [search, setSearch] = useState ('');
    

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
            onChange = {handleChange}/>

        <div className={style.ContCard}>        
            {PeopleSW.map(data =>(
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