import React, { useState, useEffect } from 'react'
import Loading from './component/Loading'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'


const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onLoad = () => setLoading(false)
    // mark loaded when window finishes loading
    window.addEventListener('load', onLoad)

    // fallback: ensure loading ends after 1.5s even if load event didn't fire
    const timer = setTimeout(() => setLoading(false), 1500)

    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(timer)
    }
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
