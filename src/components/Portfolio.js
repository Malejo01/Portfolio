import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='page'>
        <h1 className='heading'>Portfolio</h1>
        <section className='works'>
            {
                trabajos.map(trabajo => (
                    <article className='work-item' key={trabajo.id}>
                        <div className='mask'>
                            <img src={"/images/"+trabajo.id+".png"} alt="imagen del proyecto"></img>
                        </div>
                        <span>{trabajo.categorias}</span>
                        <h2><Link to={trabajo.url}>{trabajo.nombre}</Link></h2>
                        <h3>{trabajo.tecnologias}</h3>
                    </article>
                ))
            }
        </section>
        </div>
    )
}

export default Portfolio
