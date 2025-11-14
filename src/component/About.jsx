import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 768 : true
  )

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const slideFade = (dir = 1, axis = 'x') => {
    const initial = { opacity: 0, [axis]: 50 * dir }
    const whileInView = { opacity: 1, [axis]: 0 }
    return {
      initial,
      whileInView,
      viewport: { once: true, amount: 0.4 },
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const axis = isDesktop ? 'x' : 'y'

  return (
    <section id="about">
        <div className="container">
            <h2><span>About</span> Us</h2>
            <div className="flex-container">
                {/* image: slide in from left (desktop) or from top (mobile) */}
                <motion.div className="image-container" {...slideFade(-1, axis)}>
                    <img src="https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/businessman.png" alt="businessman"></img>
                </motion.div>
                {/* text: slide in from right (desktop) or from bottom (mobile) */}
                <motion.div className="text-container" {...slideFade(1, axis)}>
                    <h3>Our Story: <strong>Fueling Your Day, Simplifying Your Life.</strong></h3>
                    <p>Established right here in the heart of Purba Barddhaman, Annapurna Store is built on the belief that local life should be easy. We noticed our neighbors rushing between the snack vendor and the supply shop. <br></br><strong>It’s our little way of supporting your busy life.</strong></p>
                    <p>The result is a true <strong><i>'daily stop'</i></strong> : a single, friendly retail market where the freshest fast food meets essential stationery items. We save you time so you can focus on what matters most.</p>
                    <p>This store is more than just a business, it's a commitment to the community from our founder <strong>Sadhan Tah</strong> , who ensures every item—from the quality of the food to the stock of the supplies—meets the highest standard. <br></br><strong>We are here for you</strong>.</p>
                </motion.div>
            </div>
        </div>
        <div className="gradient-blob2"></div>
    </section>
  )
}


export default About