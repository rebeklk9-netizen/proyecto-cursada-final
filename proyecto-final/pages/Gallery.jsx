import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Gallery from '../src/components/Gallery';

// Importar imágenes
import fondo from '../src/assets/fondo.jpg';
import fondo2 from '../src/assets/fondo-2.jpg';
import superior from '../src/assets/superior.jpg';
import inferior from '../src/assets/inferior.jpg';
import top1 from '../src/assets/top-1.jpg';
import top2 from '../src/assets/top-2.jpg';
import top3 from '../src/assets/top-3.jpg';
import top4 from '../src/assets/top-4.jpg';
import jean1 from '../src/assets/jean-1.jpg';
import jean2 from '../src/assets/jean-2.jpg';
import pollera1 from '../src/assets/pollera-1.jpg';
import pollera2 from '../src/assets/pollera-2.jpg';

function GalleryPage() {
    const galleryImages = [
        { id: 1, src: fondo, alt: 'Colección Brown Sugar', title: 'Colección Primavera' },
        { id: 2, src: fondo2, alt: 'Estilo Brown Sugar', title: 'Estilo Casual' },
        { id: 3, src: top1, alt: 'Blusa Elegante', title: 'Blusa Elegante' },
        { id: 4, src: top2, alt: 'Camisa Casual', title: 'Camisa Casual' },
        { id: 5, src: top3, alt: 'Top Moderno', title: 'Top Moderno' },
        { id: 6, src: top4, alt: 'Blusa Formal', title: 'Blusa Formal' },
        { id: 7, src: jean1, alt: 'Jean Clásico', title: 'Jean Clásico' },
        { id: 8, src: jean2, alt: 'Jean Moderno', title: 'Jean Moderno' },
        { id: 9, src: pollera1, alt: 'Pollera Elegante', title: 'Pollera Elegante' },
        { id: 10, src: pollera2, alt: 'Pollera Casual', title: 'Pollera Casual' }
    ];

    return (
        <>
            <Navbar />
            
            <div className="page-header">
                <div className="container">
                    <h1>Galería</h1>
                    <p>Descubre nuestra colección completa de productos y estilos</p>
                </div>
            </div>

            <div className="container gallery-container">
                <Gallery images={galleryImages} columns="col-lg-3 col-md-4 col-sm-6" />
            </div>

            <Footer />
        </>
    );
}

export default GalleryPage;
