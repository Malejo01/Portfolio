import React from 'react'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Contacto from '../components/Contacto'
import Curriculum from '../components/Curriculum'
import Inicio from '../components/Inicio'
import Footer from '../components/Layout/Footer'
import HeaderNav from '../components/Layout/HeaderNav'
import Portfolio from '../components/Portfolio'
import Servicios from '../components/Servicios'


function MisRutas() {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION*/}
            <HeaderNav/>

            {/* CONTENIDO CENTRAL*/}
            <section className='content'>    
            <Routes>
                <Route path='/' element={<Navigate to='/inicio'/>} />
                <Route path='/inicio' element={<Inicio/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/servicios' element={<Servicios/>} />
                <Route path='/curriculum' element={<Curriculum/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path="*" element={
                    <div className='page'>
                        <h1 className='heading'>Error 404 Page not Found</h1>
                    </div>
                    }/>
            </Routes>
            </section>
            {/* FOOTER O PIE DE PAGINA*/}
            <Footer/>
            
        </BrowserRouter>
    )
}

export default MisRutas
