import React from 'react'

const ParagraphList = ({array, text='Oops'}) => {
    // console.log(props);
    
  return (
    <>
      <p>{text}</p>
      {array.map(el=><p key={el}>{el}</p>
      )}
    </>
  )
}

export default ParagraphList
