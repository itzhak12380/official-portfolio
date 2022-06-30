import React,{useContext} from 'react'
import './Card.css'
import {themContext} from '../../context/contaxt'
function Card({emoji,heading,detali}) {

  const them = useContext(themContext)
  const darkMode = them.state.darkMode
  return (
    <div className='card' style={darkMode?{color:'white'}:{color:''}}>
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span>{detali}</span>
    <button className='c-button'>learn more</button>
    </div>
  )
}

export default Card