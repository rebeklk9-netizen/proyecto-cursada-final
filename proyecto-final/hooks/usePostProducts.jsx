import { useState } from 'react';
import { getStoredProducts, saveProducts } from '../utils/productsData';

function usePostProduct() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const postProduct = async (formData) => {
        setError(null);
        setLoading(true);

        try {
            // Obtener productos actuales
            const products = getStoredProducts();
            
            // Crear nuevo producto con ID único
            const newProduct = {
                ...formData,
                id: Date.now(), // ID único basado en timestamp
                price: Number(formData.price),
                stock: Number(formData.stock)
            };

            // Agregar el nuevo producto
            const updatedProducts = [...products, newProduct];
            
            // Guardar en localStorage
            saveProducts(updatedProducts);
            
            setLoading(false);
            return { success: true, product: newProduct };

        } catch (err) {
            setError(err.message);
            setLoading(false);
            return { success: false };
        }
    };

    return { error, loading, postProduct };
}

export default usePostProduct;