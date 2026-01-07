import React, { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        comprador: '',
        tipoCompra: '',
        categoria: '',
        metodoContacto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        alert('¡Gracias por contactarnos! Pronto te responderemos.');
        
        // Resetear el formulario después de enviar
        handleReset();
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            comprador: '',
            tipoCompra: '',
            categoria: '',
            metodoContacto: '',
            mensaje: ''
        });
        console.log('Formulario reseteado');
    };

    return (
        <>
            <Navbar />
            
            {/* Header */}
            <section className="page-header">
                <div className="container">
                    <h1><i className="fas fa-envelope"></i> Contáctanos</h1>
                    <p>Estamos aquí para ayudarte</p>
                </div>
            </section>

            {/* Formulario de Contacto */}
            <section className="contact-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper">
                                <form onSubmit={handleSubmit}>
                                    {/* Nombre */}
                                    <div className="mb-4">
                                        <label htmlFor="nombre" className="form-label">
                                            <i className="fas fa-user"></i> Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label">
                                            <i className="fas fa-envelope"></i> Email *
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Teléfono */}
                                    <div className="mb-4">
                                        <label htmlFor="telefono" className="form-label">
                                            <i className="fas fa-phone"></i> Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* ¿Es comprador anterior? */}
                                    <div className="mb-4">
                                        <label className="form-label">
                                            <i className="fas fa-shopping-cart"></i> ¿Ya realizó compras con nosotros? *
                                        </label>
                                        <div className="btn-group w-100" role="group">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="comprador"
                                                id="compradorSi"
                                                value="si"
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="btn btn-outline-brown" htmlFor="compradorSi">Sí</label>
                                            
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="comprador"
                                                id="compradorNo"
                                                value="no"
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="btn btn-outline-brown" htmlFor="compradorNo">No</label>
                                        </div>
                                    </div>

                                    {/* Tipo de compra */}
                                    <div className="mb-4">
                                        <label htmlFor="tipoCompra" className="form-label">
                                            <i className="fas fa-store"></i> Tipo de Compra *
                                        </label>
                                        <select
                                            className="form-select"
                                            id="tipoCompra"
                                            name="tipoCompra"
                                            value={formData.tipoCompra}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="minorista">Minorista</option>
                                            <option value="mayorista">Mayorista</option>
                                        </select>
                                    </div>

                                    {/* Categoría de interés */}
                                    <div className="mb-4">
                                        <label htmlFor="categoria" className="form-label">
                                            <i className="fas fa-tags"></i> Categoría de Interés
                                        </label>
                                        <select
                                            className="form-select"
                                            id="categoria"
                                            name="categoria"
                                            value={formData.categoria}
                                            onChange={handleChange}
                                        >
                                            <option value="">Seleccione una categoría</option>
                                            <option value="superior">Superior</option>
                                            <option value="inferior">Inferior</option>
                                            <option value="todas">Todas</option>
                                        </select>
                                    </div>

                                    {/* Método de contacto preferido */}
                                    <div className="mb-4">
                                        <label htmlFor="metodoContacto" className="form-label">
                                            <i className="fas fa-comment"></i> Método de Contacto Preferido
                                        </label>
                                        <select
                                            className="form-select"
                                            id="metodoContacto"
                                            name="metodoContacto"
                                            value={formData.metodoContacto}
                                            onChange={handleChange}
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="email">Email</option>
                                            <option value="telefono">Teléfono</option>
                                            <option value="whatsapp">WhatsApp</option>
                                        </select>
                                    </div>

                                    {/* Mensaje */}
                                    <div className="mb-4">
                                        <label htmlFor="mensaje" className="form-label">
                                            <i className="fas fa-comment-dots"></i> Mensaje *
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="mensaje"
                                            name="mensaje"
                                            rows="5"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Botón Enviar */}
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-brown btn-lg me-2">
                                            <i className="fas fa-paper-plane"></i> Enviar
                                        </button>
                                        <button type="button" className="btn btn-outline-brown btn-lg" onClick={handleReset}>
                                            <i className="fas fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Información de contacto adicional */}
                    <div className="row mt-5">
                        <div className="col-md-4 text-center mb-3">
                            <div className="contact-info-card">
                                <i className="fas fa-map-marker-alt contact-info-icon"></i>
                                <h4>Ubicación</h4>
                                <p>Mi casa<br/>Resistencia, Chaco</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <div className="contact-info-card">
                                <i className="fas fa-phone contact-info-icon"></i>
                                <h4>Teléfono</h4>
                                <p>+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <div className="contact-info-card">
                                <i className="fas fa-envelope contact-info-icon"></i>
                                <h4>Email</h4>
                                <p>info@brownsugar.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
