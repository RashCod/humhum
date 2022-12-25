import React from 'react'
import loading from './../.././img/pizzaLo.svg'
import s from './Loading.module.css'
export const Loading = () => {
  return (
    <div className={s.div}>
        <img className={s.img} src={loading} alt="pizza" />
    </div>
  )
}
