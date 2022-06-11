import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from "../../helpers/heroImages";


export const HeroCard = ({ 
    id,
    superhero,
    alter_ego}) => {
        const imagePath = heroImages(`./${ id }.jpg`)
    
    return (
        <div className='p-1 animate__animated animate__jackInTheBox'> 
            <div className='card bg-dark  '>
                <div className="card-title bg-dark mb-0  pl-2 pt-3">
                    <h3> { superhero } </h3> 
                    <h5>- { alter_ego } </h5>
                </div>
                <div className='card-body m-0 p-0'>
                    <img src={ imagePath } alt={superhero} className="card-img" />
                </div>
                <div className='card-footer bg-dark'>
                <Link to={`/hero/${id}`} className='btn btn-outline-primary '>Ver Más</Link>
                <Link to={`/hero/${id}`} className='btn btn-outline-danger float-right'>Editar</Link>
                </div>
            </div>   
        </div>
  )
}
