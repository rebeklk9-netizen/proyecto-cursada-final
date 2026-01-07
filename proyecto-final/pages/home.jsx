import React from 'react';
import Navbar from '../src/components/Navbar';
import Carousel from '../src/components/Carousel';
import CategoriesSection from '../src/components/CategoriesSection';
import Footer from '../src/components/Footer';

function Home() {
    return (
        <>
            {/* Barra de navegación */}
            <Navbar />
            
            {/* Slider de imágenes */}
            <Carousel />
            
            {/* Sección de categorías (Superior/Inferior) */}
            <CategoriesSection />
            
            {/* Pie de página */}
            <Footer />
        </>
    );
}

export default Home;
