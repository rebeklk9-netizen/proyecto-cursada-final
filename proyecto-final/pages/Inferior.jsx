import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ProductCard from '../src/components/ProductCard';
import useGetProducts from '../hooks/useGetProducts';

function Inferior() {
    const { products, loading, error } = useGetProducts('inferior');

    return (
        <>
            <Navbar />
            
            {/* Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Prendas Inferior</h1>
                </div>
            </section>

            {/* Productos */}
            <section className="products-section py-5">
                <div className="container">
                    {loading && <p className="text-center">Cargando productos...</p>}
                    {error && <p className="text-center text-danger">Error: {error}</p>}
                    
                    <div className="row g-4">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                    
                    {!loading && products.length === 0 && (
                        <p className="text-center">No hay productos disponibles en esta categoría.</p>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Inferior;
