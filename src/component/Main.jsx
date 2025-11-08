import React from 'react'
import Hero from './Hero'
import About from './About'
import Sell from './Sell'
import Logoslide from './Logoslide'
import Feedback from './Feedback'
import FAQ from './FAQ'
import Contact from './Contact'

const Main = () => {
  return (
    <main>
        <div className="circle-big"></div>
        <Hero/>
        <div className="gradient-blob"></div>
        <About/>
        <Sell/>
        <section id="brands">
            <div className="container">
                <div className="brand-logo">
                    <Logoslide/>
                    <Logoslide/>
                </div>
            </div>
        </section>
        <Feedback/>
        <FAQ/>
        <Contact/>
    </main>
  )
}

export default Main