import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

function Inicio() {
    return (
        <div className='home'>
            <h1>Hola, soy <strong>Lizarraga Mauro</strong> y soy desarrollador web. Ofrezco mis servicios de <strong>programacion</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web</h1>
                <h2 className='title'>Te ayudo a crear tu sitio o aplicacion web, tener mas visibilidad y relevancia mediante internet. <Link to='/contacto'>Contacta conmigo</Link></h2>
        
        <section className='lasts-works'>
            <h2 className='heading'>Algunos de mis proyectos</h2>
            <p>Estos son algunos de mi trabajos de desarrolllo web</p>

            <div className='works'>
            <ListadoTrabajos limite="3"/>
            </div>
        </section>
        </div>
    )
}

export default Inicio
