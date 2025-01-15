// Делаем компонент Advantages. Он будет отрисовывать преимущества работы с нами. Это будет список наших "скиллов". Он содержит 3 скилла: Ответственность, Качество, Оперативность. Каждый скилл рисуем как div, в котором есть заголовок h6 с названием скилла, и параграф с кратким описанием (например, "Отвечаю за каждую строчку кода, клянусь честное слово!"). И стилизуем список. Делаем так, чтобы наши элементы списка размещались бы в одну строку.

import React from 'react'
import css from './Advantages.module.css'

const Advantages = () => {
  return (
    <div className={css.container}>
        <div className={css.block}>
            <h6>Ответственность</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero ab non dignissimos delectus iusto ipsa dolore facilis, sapiente aliquid?</p>
        </div>
        <div className={css.block}>
            <h6>Качество</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde inventore sed saepe consectetur sunt atque aspernatur asperiores dolorem, numquam placeat quasi quis delectus ad expedita vel recusandae magni. Dolore, dolorum.</p>
        </div>
        <div className={css.block}>
            <h6>Оперативность</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat!</p>
        </div>
        
    </div>
  )
}

export default Advantages
