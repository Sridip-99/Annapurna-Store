import React, { useState, useEffect } from 'react'

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <header>
        <a className="brand" href="#home">
            <div className="logo-img">
                <img src="https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/logo.png" alt="brand logo"></img>
            </div>
            <div className="logo-name">
                <h1>Ann<span>ap</span>urna Store</h1>
            </div>
        </a>

        <input type="checkbox" id="burger"></input>
        <label className="burger" htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div className="Navbar">
            <nav>
                <ul>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a></li>
                    <li><a href="#sell" className={activeSection === 'sell' ? 'active' : ''}>Retail Products</a></li>
                    <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a></li>
                    <li><a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQ</a></li>
                </ul>
            </nav>
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://instagram.com/annapurna.store" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://wa.me/+919476390512" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </header>
  )
}

export default Header
