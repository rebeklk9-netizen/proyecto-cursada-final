import React from 'react';

function Footer() {
    return (
        <footer className="footer py-4">
            <div className="container text-center">
                <p>&copy; 2026 Brown Sugar. Todos los derechos reservados.</p>
                <div className="social-icons mt-3">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
