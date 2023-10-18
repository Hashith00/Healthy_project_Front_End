import React from 'react'
import './card.css'

function Card(props) {
  
  return (
    <div className='card'>
        <p className='text'>{props.name}</p>
        <p className='value'>{props.value}</p>
    </div>
  )
}

export default Card