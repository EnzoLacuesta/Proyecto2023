import React from 'react'
import TareasJson from './tareasJson'
import Btn from './Btn'
import style from './tareas.module.css'

const page = () => {
  return (
    <div>
        <div>
            <Btn></Btn>
            <TareasJson></TareasJson>                       
        </div>

    </div>
  )
}

export default page