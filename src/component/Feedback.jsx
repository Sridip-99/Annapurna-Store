import React from 'react'
import Card from './Card'

const Feedback = () => {
  return (
    <section id="testimonials">
        <div className="container">
            <h2><span>Consumer's</span> Feedback</h2>
            <div className="flex-container">
                <p>Read testimonials from our satisfied customers who have experienced the quality and convenience of shopping at Annapurna Store.</p>
                <div className="feedback-container">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feedback