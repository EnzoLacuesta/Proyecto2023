import React from 'react'
import style from '../page.module.css'
import ListOfPost from './ListOfPost'
const page = () => {
  return (
    <div className={style.centrar} >
      <ListOfPost></ListOfPost>
    </div>
  )
}

export default page