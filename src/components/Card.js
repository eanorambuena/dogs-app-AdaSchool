import React from 'react'

function Card({dogData, params}) {
  return (
    <div className='card'>
        <h1> Dog with id {dogData.id} </h1>
        <img src = {dogData.url} width = {dogData.width} height = {dogData.height} alt = {dogData.id}/>
        <p className='card-parameter'> Raza: {params.raza} </p>
        <p className='card-parameter'> Edad: {params.edad} </p>
        <p className='card-parameter'> Utilidad: {params.utilidad} </p>
        <p className='card-parameter'> Temperamento: {params.temperamento} </p>
    </div>
  )
}

export default Card