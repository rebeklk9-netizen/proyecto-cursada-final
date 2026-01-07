import { useState, useEffect } from 'react';
import { getStoredProducts, initializeProducts } from '../utils/productsData';

function useGetProducts(category = null) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts();
    }, [category]);

    const getProducts = () => {
        try {
            setLoading(true);
            setError(null);

            // Inicializar productos si no existen
            initializeProducts();

            // Obtener productos del localStorage
            let allProducts = getStoredProducts();

            // Filtrar por categoría si se especifica
            if (category) {
                allProducts = allProducts.filter(p => p.category === category);
            }

            setProducts(allProducts);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return { products, error, loading, refreshProducts: getProducts };
}

export default useGetProducts;