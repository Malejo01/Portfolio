import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

function ListadoTrabajos({limite}) {
    return (
        <section className='works'>
            {
                trabajos.slice(0,limite).map(trabajo => (
                    <article className='work-item' key={trabajo.id}>
                        <div className='mask'>
                            <img src={"/images/"+trabajo.id+".png"} alt="imagen del proyecto"></img>
                        </div>
                        <span>{trabajo.categorias}</span>
                        <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                        <h3>{trabajo.tecnologias}</h3>
                    </article>
                ))
            }
        </section>
    )
}

export default ListadoTrabajos
