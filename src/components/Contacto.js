import React from 'react'

function Contacto() {
    return (
    <div className='page'>
        <h1 className='heading'>Contacto</h1>
        <form className='contact' action='mailto:lizarragamauroalejandro@gmail.com'>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Apellido'/>
                <input type="text" placeholder='Email'/>
                <textarea placeholder='Motivo de contacto'/>
                <input type="submit" value='Enviar'/>
        </form>
    </div> 
    )
}

export default Contacto
