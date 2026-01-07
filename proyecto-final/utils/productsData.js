// Datos iniciales de productos
import top1 from '../src/assets/top-1.jpg';
import top2 from '../src/assets/top-2.jpg';
import top3 from '../src/assets/top-3.jpg';
import top4 from '../src/assets/top-4.jpg';
import jean1 from '../src/assets/jean-1.jpg';
import jean2 from '../src/assets/jean-2.jpg';
import pollera1 from '../src/assets/pollera-1.jpg';
import pollera2 from '../src/assets/pollera-2.jpg';

export const initialProducts = [
    // Productos Superiores
    { 
        id: 1, 
        name: 'Top Clásico', 
        price: 25, 
        image: top1,
        description: 'Top clásico ideal para el día a día',
        status: 'AVAILABLE',
        category: 'superior',
        stock: 10
    },
    { 
        id: 2, 
        name: 'Top Casual', 
        price: 30, 
        image: top2,
        description: 'Top casual perfecto para cualquier ocasión',
        status: 'AVAILABLE',
        category: 'superior',
        stock: 8
    },
    { 
        id: 3, 
        name: 'Top Moderno', 
        price: 20, 
        image: top3,
        description: 'Top moderno con diseño único',
        status: 'AVAILABLE',
        category: 'superior',
        stock: 15
    },
    { 
        id: 4, 
        name: 'Top Elegante', 
        price: 35, 
        image: top4,
        description: 'Top elegante para eventos especiales',
        status: 'AVAILABLE',
        category: 'superior',
        stock: 5
    },
    // Productos Inferiores
    { 
        id: 5, 
        name: 'Jean Clásico', 
        price: 40, 
        image: jean1,
        description: 'Jean clásico de corte tradicional',
        status: 'AVAILABLE',
        category: 'inferior',
        stock: 12
    },
    { 
        id: 6, 
        name: 'Jean Moderno', 
        price: 45, 
        image: jean2,
        description: 'Jean moderno con corte slim fit',
        status: 'AVAILABLE',
        category: 'inferior',
        stock: 10
    },
    { 
        id: 7, 
        name: 'Pollera Elegante', 
        price: 35, 
        image: pollera1,
        description: 'Pollera elegante para toda ocasión',
        status: 'AVAILABLE',
        category: 'inferior',
        stock: 7
    },
    { 
        id: 8, 
        name: 'Pollera Casual', 
        price: 28, 
        image: pollera2,
        description: 'Pollera casual y cómoda',
        status: 'AVAILABLE',
        category: 'inferior',
        stock: 9
    }
];

// Función para inicializar productos en localStorage
export const initializeProducts = () => {
    const products = localStorage.getItem('products');
    if (!products) {
        localStorage.setItem('products', JSON.stringify(initialProducts));
    }
};

// Función para obtener productos del localStorage
export const getStoredProducts = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : initialProducts;
};

// Función para guardar productos en localStorage
export const saveProducts = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
};
