import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-beige">
            <div className="container">
                {/* Logo y nombre */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Brown Sugar Logo" className="logo-img" />
                    <span className="brand-name">Brown Sugar</span>
                </Link>
                
                {/* Botón para móvil */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Menú de navegación */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i> Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#catalogo">
                                <i className="fas fa-shopping-bag"></i> Catálogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/galeria">
                                <i className="fas fa-images"></i> Galería
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">
                                <i className="fas fa-envelope"></i> Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
