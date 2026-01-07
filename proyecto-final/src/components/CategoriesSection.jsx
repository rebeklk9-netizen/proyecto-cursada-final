import React from 'react';
import { Link } from 'react-router-dom';
import superiorImg from '../assets/superior.jpg';
import inferiorImg from '../assets/inferior.jpg';

function CategoriesSection() {
    return (
        <section id="catalogo" className="categories-section py-5">
            <div className="container">
                <h2 className="text-center mb-5">Nuestras Categorías</h2>
                <div className="row g-4 justify-content-center">
                    {/* Categoría Superior */}
                    <div className="col-md-5">
                        <div className="category-card" style={{ backgroundImage: `url(${superiorImg})` }}>
                            <div className="category-overlay">
                                <h3>Superior</h3>
                                <Link to="/superior" className="btn btn-outline-brown">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Categoría Inferior */}
                    <div className="col-md-5">
                        <div className="category-card" style={{ backgroundImage: `url(${inferiorImg})` }}>
                            <div className="category-overlay">
                                <h3>Inferior</h3>
                                <Link to="/inferior" className="btn btn-outline-brown">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;
