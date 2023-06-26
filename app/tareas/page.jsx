'use client'
import { useState } from 'react'
import React from 'react'
import style from './tareas.module.css'

const page = () => {
    const [listaTarea, setListaTarea] = useState ([])
    const [tarea, setTarea] = useState ("")

    const CrearTarea = () =>{
        (tarea === "") ? alert("Escribe una tarea") : setListaTarea(listaTarea.concat(tarea))
    }
    
  return (
    <div className={style.tareas}>
        <input 
            type="text"
            placeholder='Crea una tarea'
            value={tarea} 
            onChange={(e)=> setTarea(e.target.value)}/>
        <button onClick={CrearTarea}>Crear tarea</button>
        {
            listaTarea.map((value, index)=>{
                return (
                    <div key={index}>{value}</div>
                )
            })
        }
    </div>
  )
}

export default page