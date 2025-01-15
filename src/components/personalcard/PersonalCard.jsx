
import React from 'react'
import css from './PersonalCard.module.css'

const PersonalCard = () => {
  return (
    <div className={css.personalInfoContainer}>
        <div>
            <h3>Vasylenko</h3>
            <p>Frontent-developer</p>
            <p>Super-girl &#9824;</p>
        </div>
        <div>
            <img className={css.img} src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" alt="avatar" />
        </div>     
      
    </div>

  )
}

export default PersonalCard
