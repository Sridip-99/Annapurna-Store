import React from 'react'

const Header = () => {
  return (
    <header>
        <a className="brand" href="#home">
            <div className="logo-img">
                <img src="./src/assets/images/logo.png" alt="brand logo"></img>
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#sell">Retail Products</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#faq">FAQ</a></li>
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