'use client'
import React from 'react'
import { useState ,useEffect} from 'react'
import style from './Cats.module.css'

  const CatImagen = `https://cataas.com/cat/says/`
  const CatFact = 'https://catfact.ninja/fact'

  const Cats = () => {  
    const [cats, setCats] = useState ([]);   

    useEffect(()=>{
            fetch(CatFact)
            .then(res => res.json())     
            .then(data => {
              const { fact } = data
              setCats(data.fact)

              const firstWord = fact.split(' ')[0]
              console.log(firstWord)
     
            })
              } ,[])
      
    return (
      <div>

        <div className={style.cats}>
          <h1>App de gatitos</h1> 
          <p>{cats}</p>        
        </div>
        <div className={style.cats}>
          <img src={`${CatImagen}${cats}`} alt="Img First word" />        
        </div>
      </div>
  )}

export default Cats