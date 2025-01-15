import React from 'react'
import {Torin, Gandalf, Bilbo} from '../../data/persons'
import css from './Managers.module.css'
import  {programe, detailed} from '../../data/persons'
import ParagraphList from '../paragraphList/ParagraphList'
import {org} from '../../data/persons'
import OrgList from '../orgList/OrgList'

const Managers = () => {
    const middleEartAreas = ['Moria', 'Rivendalle', 'Isengard', 'Rohan', 'Gondor', 'Hobbiton', 'Shire'];
  return (
    <>
    <div >
    <ParagraphList array={middleEartAreas} text='У природы нет плохой погоды'/>
    </div>
    <div className={css.container}>
    <OrgList array={org} css={css.card}/>
    </div>
    <ul>
    <ParagraphList array={programe}/>

    </ul>
    <div>
        {detailed.map(el => 
        <div key={el.name}>
            <h4>{`${el.name} ${el.nickname ? el.nickname : ' '}`}</h4>
            <p>{el.subject ? el.subject : ' '}</p>
        </div>
            )}
    </div>
    </>
  )
}

export default Managers
