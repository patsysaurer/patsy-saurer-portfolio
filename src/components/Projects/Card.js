import React from 'react'
import './Projects.css'

const Card = (props) => {
  return (
    <div className='cards'>
      <img className='card-image' src={props.img} alt={props.alt}/>
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-text'>{props.text}</p>  
      <a href={props.link} target='_blank'>{props.link_name}</a> 
    </div>
  )
}

export default Card