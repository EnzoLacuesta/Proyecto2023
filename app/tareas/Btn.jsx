'use client'
import React, { useEffect, useState } from 'react'


const Btn = () => {
    const [tarea, setTarea] = useState ("")
    const [listaTarea, setListaTarea] = useState ([])


    const CrearTarea = () =>{
    (tarea === "") ? alert("Escribe una tarea") : setListaTarea(tarea)
}


  return (
    <div>
        <input 
            type="text"
            value={tarea}
            onChange={(e)=>setTarea(e.target.value)}/>
            
        <button onClick={CrearTarea}>Crear tarea</button>

        {
            listaTarea.map(({index, task})=>{
                return (
                    <div key={index}>{task}</div>
                )
            })
        }

    </div>
  )
}

export default Btn