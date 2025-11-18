import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' ? window.innerWidth > 768 : true
    )
    
    useEffect(() => {
        const onResize = () => setIsDesktop(window.innerWidth > 768)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])
    
    const slideFade = (dir = 1, axis = 'x', id = 1) => {
        const initial = { opacity: 0, [axis]: 50 * dir }
        const whileInView = { opacity: 1, [axis]: 0 }
        return {
          initial,
          whileInView,
          viewport: { once: true, amount: 0.4 },
          transition: { duration: id * 0.25, ease: 'easeOut' }
        }
    }
    
    const axis = isDesktop ? 'x' : 'y'
    return (
    <footer>
        <div className="container">
            <h4>Eat <strong>Smart</strong>. Write <strong>Bold</strong>. — Annapurna Store, Madhupur</h4>
            <div className="footer-divider">
                <motion.div className="footer-container" {...slideFade(-1, axis, 1)}>
                    <h5>Connect with Us</h5>
                    <div className="footer-item">
                        <a href="tel:+919476390512"><i className="fa-solid fa-phone"></i> +91 94763 90512</a>
                        <a href="mailto:sadhantah0@gmail.com"><i className="fa-solid fa-envelope"></i> sadhantah0@gmail.com</a>
                        <a href="https://wa.me/+919476390512"><i className="fa-brands fa-whatsapp"></i> +91 94763 90512</a>
                        <a href="https://maps.app.goo.gl/jFhEpPxgtnPDH7p57" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-location-dot"></i> 77J6+W3 Madhupur, West Bengal</a>
                    </div>
                    
                </motion.div>
                <motion.div className="footer-container" {...slideFade(-1, axis, 2)}>
                    <h5>Quick Links</h5>
                    <div className="footer-item">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#sell">Retail Products</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                </motion.div>
                <motion.div className="footer-container" {...slideFade(-1, axis, 3)}>
                    <h5>Follow Us</h5>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/annapurna.store" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://youtube.com/@annapurnastore01" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </motion.div>
            </div>
            <p>
                &copy; 2005-2025 - Annapurna Store | All Rights Reserved | <i>Designed & Developed with <i className="fa-regular fa-heart" style={{"color": "#ff9f6f"}}></i> by</i> <a href="https://sridiptah99.netlify.app" target="_blank" rel="noopener noreferrer">Sridip Tah</a>
            </p>
        </div>
    </footer>
    )
}


export default Footer



