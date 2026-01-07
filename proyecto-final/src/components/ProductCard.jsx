import React from 'react';
import PropTypes from 'prop-types';
import { statusTranslations } from '../../utils/statusTranslations';

function ProductCard({ product }) {
    const handleAddToCart = () => {
        console.log('Producto agregado al carrito:', product);
        alert(`${product.name} agregado al carrito`);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
                <div className="product-image">
                    <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-price">${product.price}.00</p>
                    <p className="product-status">
                        <strong>Estado:</strong> {statusTranslations[product.status] || product.status}
                    </p>
                    <p className="product-stock">
                        <strong>Stock:</strong> {product.stock} unidades
                    </p>
                    <button 
                        className="btn btn-brown btn-sm" 
                        onClick={handleAddToCart}
                    >
                        <i className="fas fa-shopping-cart"></i> Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired
    }).isRequired
};

export default ProductCard;
