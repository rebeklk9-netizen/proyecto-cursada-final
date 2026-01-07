import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Gallery - Muestra una galería de imágenes
 * @param {Array} images - Array de objetos con {id, src, alt, title}
 * @param {string} columns - Clases de columnas Bootstrap (ej: "col-md-4", "col-lg-3")
 */
function Gallery({ images = [], columns = "col-lg-3 col-md-4 col-sm-6" }) {
    
    if (images.length === 0) {
        return (
            <div className="text-center py-5">
                <p>No hay imágenes para mostrar</p>
            </div>
        );
    }

    return (
        <div className="gallery-container">
            <div className="row g-4">
                {images.map((image) => (
                    <div key={image.id} className={columns}>
                        <div className="gallery-item">
                            <img 
                                src={image.src} 
                                alt={image.alt || 'Imagen de galería'} 
                                className="gallery-image"
                            />
                            {image.title && (
                                <div className="gallery-caption">
                                    <h5>{image.title}</h5>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            title: PropTypes.string
        })
    ),
    columns: PropTypes.string
};

export default Gallery;
