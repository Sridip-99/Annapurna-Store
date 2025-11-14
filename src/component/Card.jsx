import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ id, userName, image, about, feedback, YTshotslink }) => {
    const slideFade = (dir = 1, axis = 'y') => {
        const initial = { opacity: 0, [axis]: 50 * dir }
        const whileInView = { opacity: 1, [axis]: 0 }
        return {
        initial,
        whileInView,
        viewport: { once: true, amount: 0.4 },
        transition: { duration: id * 0.15, ease: 'easeInOut' }
        }
    }
    return (
        <motion.div className="card" {...slideFade(1, 'y')}>
            <div className="feedback-text-container">
                <p>{feedback}</p>
            </div>
            <div className="feedback-consumer-container">
                <div className="feedback-consumer-img">
                    <img src={image} alt={userName + " profile picture"}></img>
                </div>
                <div className="feedback-consumer-info">
                    <h4>{userName}</h4>
                    <p>{about}</p>
                </div>
                <a href={YTshotslink}><i className="fa-brands fa-youtube"></i></a>
            </div>
        </motion.div>
    )
}

export default Card
