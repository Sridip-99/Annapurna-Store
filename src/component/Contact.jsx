import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
        <div className="container">
            <h2><span>Contact</span> Us</h2>
            <div className="flex-container">
                <div className="contact-info">
                    <a href="tel:+919476390512" className="info-item">
                        <i className="fa-solid fa-phone"></i>
                        <div className="info-text">
                            <h4>Phone</h4>
                            <p>+91 94763 90512</p>
                        </div>
                    </a>
                    <a href="mailto:sadhantah0@gmail.com" className="info-item">
                        <i className="fa-solid fa-envelope"></i>
                        <div className="info-text">
                            <h4>Email</h4>
                            <p>sadhantah0@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://wa.me/+919476390512" className="info-item">
                        <i className="fa-brands fa-whatsapp"></i>
                        <div className="info-text">
                            <h4>Whatsapp</h4>
                            <p>+91 94763 90512</p>
                        </div>
                    </a>
                </div>
                <div className="location">
                    <h4>Our Store Location</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.0575791661602!2d88.26003512944858!3d23.2823103811891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8fc095cde7a7f%3A0x6e47f84b0548da8f!2s77J6%2BV35%2C%20Bhagra%2C%20West%20Bengal%20713405!5e0!3m2!1sen!2sin!4v1762531712854!5m2!1sen!2sin" width="380" height="280" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact