import React from 'react'
import Menu from '../menu/Menu'
import css from './Footer.module.css'
import Copyright from './Copyright'


const Footer = () => {
  return (
    <div className={css.container}>
       Footer
      <Menu/>
      <Copyright/>
    </div>
  )
}

export {Footer}
