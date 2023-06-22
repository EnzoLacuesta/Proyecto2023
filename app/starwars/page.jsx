import React from 'react'
import style from './SW.module.css'
import Card from './Card'
const page = () => {
  return (
    <div className={style.SW}>
        <div className={style.SW}>
            <h1> Star wars</h1>
        </div>  
        <Card></Card>
    </div>
  )
}

export default page