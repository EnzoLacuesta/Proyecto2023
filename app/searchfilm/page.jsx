import React from 'react'
import style from './search.module.css'

const page = () => {
  return (
    <div>
        <header>
            <form className={style.form}>
                <label htmlFor="">Busca tu pelicula</label>
                <input type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
                <button 
                  type='sumbit'
                  className={style.btn}>
                    Busca tu pelicula
                </button>
            </form>
        </header>
    </div>
  )
}

export default page