import React from 'react'
import style from './Nav.module.css'

const rutas = [
    {
      ruta: '/',
      label:'Inicio'
    },
    {
        ruta: '/post',
        label:'Post'
      },
      {
        ruta: '/starwars',
        label:'Star Wars'
      },
      {
        ruta: '/tareas',
        label:'Lista de tareas'
      },
      {
        ruta: '/searchfilm',
        label:'Search film'
      }
  ];

const Nav = () => {
  return (
    <nav className={style.nav}>
        <ul className={style.ul}>
            {rutas.map(({ruta, label})=>(
            <li >
                <a className={style.li} href={ruta}>{label}</a>
            </li>
            ))}
        </ul>      
    </nav>

  )
}

export default Nav