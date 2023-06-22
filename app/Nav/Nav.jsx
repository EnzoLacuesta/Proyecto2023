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
      }
  ];

const Nav = () => {
  return (
    <nav >
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