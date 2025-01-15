// Создайте компонент SimpleHeading, который будет возвращать нам заголовок с текстом Hello, conditional rendering!. В компоненте, нужно создать переменную, в которую запишете случайное значение. Если значение меньше 0.5 - рендерим заголовок h3 с указанным текстом, иначе рендерим заголовок h2.
// В компоненте RandomText, нужно после параграфа который там есть, рендерить еще один параграф с текстом Small value. Рендерить его нужно только в том случае, если значение переменной rand < 0.5.

import React from 'react'
import css from './SimpleHeading.module.css'

const SimpleHeading = () => {
    const text = 'Hello, conditional rendering!'

    const num = Math.random()  
    return (
    <div className={css.container}>
      {num}  {num<0.5 ? <h3>{text}</h3> : <h2>{text}</h2>}
      {num<0.5 && <p>Small value</p>}
    </div>
  )
}

export default SimpleHeading
