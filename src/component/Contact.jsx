import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' ? window.innerWidth > 768 : true
    )
    
    useEffect(() => {
        const onResize = () => setIsDesktop(window.innerWidth > 768)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const slideFade = (dir = 1, axis = 'x') => {
        const initial = { opacity: 0, [axis]: 10 * dir }
        const whileInView = { opacity: 1, [axis]: 0 }
        return {
        initial,
        whileInView,
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.25, ease: 'easeInOut' }
        }
    }
    
    const axis = isDesktop ? 'x' : 'y'
    return (
        <section id="contact">
            <div className="container">
                <h2><span>Contact</span> Us</h2>
                <div className="flex-container">
                    <motion.div className="contact-info" {...slideFade(-1, axis)}>
                        <motion.a href="tel:+919476390512" className="info-item" {...slideFade(1, 'y')}>
                            <i className="fa-solid fa-phone"></i>
                            <div className="info-text">
                                <h4>Phone</h4>
                                <p>+91 94763 90512</p>
                            </div>
                        </motion.a>
                        <a href="mailto:sadhantah0@gmail.com" className="info-item" style={{ zIndex: 3}}>
                            <i className="fa-solid fa-envelope"></i>
                            <div className="info-text">
                                <h4>Email</h4>
                                <p>sadhantah0@gmail.com</p>
                            </div>
                        </a>
                        <motion.a href="https://wa.me/+919476390512" className="info-item" {...slideFade(-1, 'y')}>
                            <i className="fa-brands fa-whatsapp"></i>
                            <div className="info-text">
                                <h4>Whatsapp</h4>
                                <p>+91 94763 90512</p>
                            </div>
                        </motion.a>
                    </motion.div>
                    <motion.div className="location" {...slideFade(1, axis)}>
                        <h4>Our Store Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.0576672687501!2d88.26032679870154!3d23.282259166605673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8fd4b8000379b%3A0x43b575807e152e0!2sAnnapurna%20Fastfood%20%26%20Stationers!5e0!3m2!1sen!2sin!4v1762892168591!5m2!1sen!2sin" width="380" height="280" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


export default Contact
