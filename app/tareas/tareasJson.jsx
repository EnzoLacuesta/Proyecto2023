'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import style from './tareas.module.css'

const TareasJson = () => {
    const [listaTarea, setListaTarea] = useState ([])


    useEffect(()=>{
        fetch('http://localhost:2000/tasks')
        .then((res) => res.json())
        .then(data => setListaTarea(data))       
    },[])
    
  return (
    <div className={style.tareas}>
        {
            listaTarea.map(({id, task})=>{
                return (
                    <div key={id}>{task}</div>
                )
            })
        }
    </div>
  )
}

export default TareasJson