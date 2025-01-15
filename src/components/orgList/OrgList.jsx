import React from 'react'


const OrgList = ({array, css}) => {
    console.log(array, css);
      
    return (
    <>
    {array.map(el =>{
        return (       
        <div className={css} key={el.name}>
            <h4>{`${el.name} ${el.nickname}`}</h4>
            <p>{el.race}</p>
            <p>{el.weapons.join(', ')}</p>
        </div>   
         ) 
        })
        }  
    </>
  )
}

export default OrgList
