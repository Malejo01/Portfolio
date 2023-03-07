import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='page'>
        <h1 className='heading'>Portfolio</h1>

        {
            trabajos.map(trabajo => (
                <article key={trabajo.id}>
                    <span>{trabajo.categorias}</span>
                    <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                    <h3>{trabajo.tecnologias}</h3>
                </article>
            ))
        }
        </div>
    )
}

export default Portfolio
