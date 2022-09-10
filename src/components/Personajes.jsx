import React from 'react'

//utilizamos {info} como props, nos permitira llamarlo desde otro componente
const Personajes = ({info}) => {
  return (
    
        <div className='text-center card card-body m-2 p-2 border-warning cardEstilo '>
            <img src={info.image} alt={info.name} className="card-img-t img-fluid"  />
            <h3 className='card-title text-dark'>{info.name}</h3>
            <strong className='text-dark'>{info.species}</strong>    
            <p className='text-dark'>{info.status}</p>        
        </div>

        
  )
}

export default Personajes