import React from 'react';
import { Link } from 'react-router-dom';
import fondo1 from '../assets/fondo.jpg';
import fondo2 from '../assets/fondo-2.jpg';

function Carousel() {
    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            {/* Indicadores */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            {/* Slides */}
            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active" style={{ backgroundImage: `url(${fondo1})` }}>
                    <div className="carousel-content">
                        <h1>Bienvenido a Brown Sugar</h1>
                        <p>Tu tienda de moda favorita</p>
                        <a href="#catalogo" className="btn btn-brown">Ver Catálogo</a>
                    </div>
                </div>
                
                {/* Slide 2 */}
                <div className="carousel-item" style={{ backgroundImage: `url(${fondo2})` }}>
                    <div className="carousel-content">
                        <h1>Nueva Colección</h1>
                        <p>Descubre las últimas tendencias</p>
                        <a href="#catalogo" className="btn btn-brown">Explorar</a>
                    </div>
                </div>
                
                {/* Slide 3 */}
                <div className="carousel-item" style={{ backgroundImage: `url(${fondo1})` }}>
                    <div className="carousel-content">
                        <h1>Estilo Único</h1>
                        <p>Encuentra tu look perfecto</p>
                        <Link to="/contacto" className="btn btn-brown">Contáctanos</Link>
                    </div>
                </div>
            </div>
            
            {/* Controles */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
}

export default Carousel;
