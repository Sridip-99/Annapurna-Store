import React, { useState, useEffect } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq">
        <div className="container">
            <h2>Frequently Asked <span>Questions</span></h2>
            <div className="flex-container">
                <p>Find answers to common questions about our products, services, and store policies.</p>
                <div className="faq-container">
                    <div className="faq-item">
                        <button 
                            className="faq-question"
                            onClick={() => handleClick(0)}
                        >
                            What are your store hours?
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className={`faq-answer ${activeIndex === 0 ? 'active' : ''}`}>
                            <p>We are open from <strong>8:00 AM</strong> to <strong>9:00 PM</strong>, Everyday. Shop remain closed on lunch hours from <strong>1:30 PM</strong> to <strong>4:30 PM</strong>.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button 
                            className="faq-question"
                            onClick={() => handleClick(1)}
                        >
                            Do you accept online payments?
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className={`faq-answer ${activeIndex === 1 ? 'active' : ''}`}>
                            <p>Yes, we accept online payments only through <strong>UPI</strong>.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button 
                            className="faq-question"
                            onClick={() => handleClick(2)}
                        >
                            Can I place bulk orders for events or offices?
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className={`faq-answer ${activeIndex === 2 ? 'active' : ''}`}>
                            <p>Absolutely! We welcome bulk orders. Please <strong>reach out to us in advance</strong> to ensure availability and special pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default FAQ
