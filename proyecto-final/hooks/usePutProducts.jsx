import { useState } from "react";
import { getStoredProducts, saveProducts } from '../utils/productsData';

function usePutProducts() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const updateProduct = async (productId, updatedData) => {
        setError(null);
        setLoading(true);

        try {
            // Obtener productos actuales
            const products = getStoredProducts();
            
            // Encontrar y actualizar el producto
            const updatedProducts = products.map(product => 
                product.id === productId 
                    ? { ...product, ...updatedData, price: Number(updatedData.price), stock: Number(updatedData.stock) }
                    : product
            );

            // Guardar en localStorage
            saveProducts(updatedProducts);
            
            setLoading(false);
            return { success: true };

        } catch (err) {
            setError(err.message);
            setLoading(false);
            return { success: false, error: err.message };
        }
    };

    return { error, loading, updateProduct };
}

export default usePutProducts;   