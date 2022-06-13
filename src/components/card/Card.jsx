import React from 'react'
import './Card.css'
function Card({emoji,heading,detali}) {
  return (
    <div className='card'>
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span>{detali}</span>
    <button className='c-button'>learn more</button>
    </div>
  )
}

export default Card