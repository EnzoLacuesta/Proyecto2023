'use client'
import React, { useEffect, useState } from 'react'

const API_SW = 'https://swapi.dev/api/people'

const Card = () => {

    const [PeopleSW, setPeopleSw] = useState([])

    useEffect(()=>{
        fetch(API_SW)
        .then(res => res.json())
        .then(data => 
            setPeopleSw(data.results)
        )
    },[])

  return (
    <div>
        {PeopleSW.map(data =>(
            <div key={data.name}>
                {data.name}
            </div>
        ))}
        
    </div>
  )
}

export default Card