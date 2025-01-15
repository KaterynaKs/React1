import React from 'react'
import { text, text1 } from '../../data/text'

const Paragraph = () => {
    const num = 4
    const data = new Date().getFullYear()
    return (
    <div>
     {/* {num>1 ? <p>{text} {num}</p> : <p>{text1}</p> } */}
     {num>1 && <p>{`${text} ${num}`}</p>}
     <p>{5+5}</p>  
     {data}   
    </div>
  )
}

export default Paragraph
