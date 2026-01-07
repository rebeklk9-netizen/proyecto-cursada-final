import React, { useState } from 'react';
import { statusTranslations } from '../utils/statusTranslations';
import usePostProduct from '../hooks/usePostProducts';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function CreateProduct() {
    const [form, setForm] = useState({
        name: '',
        image: '',
        description: '',
        status: 'AVAILABLE',
        category: 'superior',
        price: 0,
        stock: 1
    });

    const { error, loading, postProduct } = usePostProduct();
    const [successMessage, setSuccessMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const result = await postProduct(form);
        
        if(result.success){
            setSuccessMessage('¡Producto creado exitosamente!');
            // Limpiar formulario
            setForm({
                name: '',
                image: '',
                description: '',
                status: 'AVAILABLE',
                category: 'superior',
                price: 0,
                stock: 1
            });
            // Limpiar mensaje después de 3 segundos
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm({
            ...form,
            [name]: type === 'number' ? parseInt(value) || 0 : value
        });
    };

    return (
        <>
            <Navbar />
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper">
                                <h1 className="text-center mb-4">Crear Producto</h1>
                                
                                {successMessage && (
                                    <div className="alert alert-success">{successMessage}</div>
                                )}
                                
                                <form onSubmit={handleFormSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nombre del Producto:</label>
                                        <input 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.name}
                                            type="text" 
                                            className="form-control"
                                            id="name" 
                                            name="name" 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">URL de la Imagen:</label>
                                        <input 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.image}
                                            type="text" 
                                            className="form-control"
                                            id="image" 
                                            name="image" 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Descripción:</label>
                                        <textarea 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.description}
                                            className="form-control"
                                            id="description" 
                                            name="description"
                                            rows="3"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Categoría:</label>
                                        <select 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.category}
                                            className="form-select"
                                            id="category" 
                                            name="category"
                                        >
                                            <option value="superior">Superior</option>
                                            <option value="inferior">Inferior</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="status" className="form-label">Estado:</label>
                                        <select 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.status}
                                            className="form-select"
                                            id="status" 
                                            name="status"
                                        >
                                            {Object.keys(statusTranslations).map(status => (
                                                <option value={status} key={status}>
                                                    {statusTranslations[status]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Precio:</label>
                                        <input 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.price}
                                            type="number" 
                                            className="form-control"
                                            id="price" 
                                            name="price"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="stock" className="form-label">Stock:</label>
                                        <input 
                                            required 
                                            onChange={handleInputChange} 
                                            value={form.stock}
                                            type="number" 
                                            className="form-control"
                                            id="stock" 
                                            name="stock"
                                        />
                                    </div>
                                    
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-brown me-2" disabled={loading}>
                                            {loading ? 'Creando...' : 'Crear Producto'}
                                        </button>
                                        <button type="reset" className="btn btn-outline-brown">Cancelar</button>
                                    </div>
                                    
                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default CreateProduct;