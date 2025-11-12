import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <h4>Eat Smart. Write Bold. — Annapurna Store, Madhupur</h4>
            <div className="footer-divider">
                <div className="footer-container">
                    <h5>Connect with Us</h5>
                    <div className="footer-item">
                        <a href="tel:+919476390512"><i className="fa-solid fa-phone"></i> +91 94763 90512</a>
                        <a href="mailto:sadhantah0@gmail.com"><i className="fa-solid fa-envelope"></i> sadhantah0@gmail.com</a>
                        <a href="https://wa.me/+919476390512"><i className="fa-brands fa-whatsapp"></i> +91 94763 90512</a>
                        <a href="https://maps.app.goo.gl/jFhEpPxgtnPDH7p57" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-location-dot"></i> 77J6+W3 Madhupur, West Bengal</a>
                    </div>
                    
                </div>
                <div className="footer-container">
                    <h5>Quick Links</h5>
                    <div className="footer-item">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#sell">Retail Products</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                </div>
                <div className="footer-container">
                    <h5>Follow Us</h5>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/annapurna.store" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <p>
                &copy; 2005-2025 - Annapurna Store | All Rights Reserved | <i>Designed & Developed with <i className="fa-regular fa-heart" style={{"color": "#ff9f6f"}}></i> by</i> <a href="https://sridiptah99.netlify.app" target="_blank" rel="noopener noreferrer">Sridip Tah</a>
            </p>
        </div>
    </footer>
  )
}


export default Footer


