'use client'
import React, { useState } from 'react'
import style from './tareas.module.css'

const Btn = () => {

    const [tarea, setTarea] = useState ("")
    const [listaTarea, setListaTarea] = useState ([])

    const CrearTarea = () =>{
        (tarea === "") ? alert("Escribe una tarea") : setListaTarea(listaTarea.concat(tarea)); setTarea("")
    }

  return (
    <div className={style.tareas}>
        <input 
            type="text"
            value={tarea}
            onChange={(e)=>setTarea(e.target.value)}/>            
        <button onClick={CrearTarea}>Crear tarea</button>
        {
            listaTarea.map((value)=>{
                return (
                    <div key={value}>{value}</div>
                )})
        }
    </div>
  )
}

export default Btn