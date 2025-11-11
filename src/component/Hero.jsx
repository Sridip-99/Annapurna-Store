import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [slideState, setSlideState] = useState('left');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  
  const slidesRef = useRef(null);
  const containerRef = useRef(null);
  
  const slideWidth = window.innerWidth < 768 ? 380 : 560;
  const threshold = slideWidth * 0.2;

  const getBaseOffset = () => {
    switch(slideState) {
      case 'left': return slideWidth;
      case 'right': return -slideWidth;
      default: return 0;
    }
  };

  const setSlidesTranslate = (x, withTransition = false) => {
    if (!slidesRef.current) return;
    slidesRef.current.style.transition = withTransition ? 'all 0.5s ease-in-out' : 'none';
    slidesRef.current.style.transform = `translateX(${x}px)`;
  };

  const handlePrev = () => {
    if (slideState === 'right') setSlideState('center');
    else if (slideState === 'center') setSlideState('left');
    else setSlideState('right');
  };

  const handleNext = () => {
    if (slideState === 'left') setSlideState('center');
    else if (slideState === 'center') setSlideState('right');
    else setSlideState('left');
  };

  const onDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDeltaX(0);
    if (slidesRef.current) {
      slidesRef.current.style.willChange = 'transform';
      setSlidesTranslate(getBaseOffset(), false);
    }
  };

  const onDragMove = (clientX) => {
    if (!isDragging) return;
    const newDeltaX = clientX - startX;
    setDeltaX(newDeltaX);
    setSlidesTranslate(getBaseOffset() + newDeltaX, false);
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (deltaX > threshold) {
      if (slideState === 'right') setSlideState('center');
      else if (slideState === 'center') setSlideState('left');
      else setSlideState('right');
    } else if (deltaX < -threshold) {
      if (slideState === 'left') setSlideState('center');
      else if (slideState === 'center') setSlideState('right');
      else setSlideState('left');
    } else {
      setSlideState(slideState);
    }

    if (slidesRef.current) {
      slidesRef.current.style.willChange = '';
    }
  };

  useEffect(() => {
    setSlidesTranslate(getBaseOffset(), true);
  }, [slideState]);

  return (
    <section id="home">
        <div className="flex-container">
            <h1>Your Daily Stop: <strong>Fast F<i className="fa-solid fa-cookie"></i><i className="fa-solid fa-cookie"></i>d <span>&</span> Stat<i className="fa-solid fa-pen"></i>onery</strong></h1>
            <div className="container-inside">
                <div className="overview-container">
                    <h2>Fast Food and Stationery Items Store in 
                        <br></br><strong>Madhupur, Purba Barddhaman</strong>
                    </h2>
                    <p>From a quick meal on your lunch break to the office supplies you forgot, find everything you need right here in Madhupur. 
                        <br></br><i><strong>Save time. Get what you need.</strong></i>
                    </p>
                    <div className="home-btn-container">
                        <a href="#sell">Explore The Store <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="https://maps.app.goo.gl/B3F4f6ppKnr9TkHX7" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-map-location-dot"></i> Get Direction</a>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="slides-container" ref={containerRef}>
                      <div className="slides" ref={slidesRef}
                           onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
                           onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
                           onTouchEnd={onDragEnd}>
                            <iframe width="100%" height="100%" style={{ border: 'none' }} 
                                    src="https://www.youtube.com/embed/hqWhKkoIM8E?si=33Dp4PzvaDPCCPjW" 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen></iframe>
                            <img src="https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/store_outer.jpg" alt="Shop Outer Image"></img>
                            <img src="https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/signboard.jpg" alt="Sign Board Image"></img>
                        </div>
                        <button id="prev" onClick={handlePrev}>&lt;</button>
                        <button id="next" onClick={handleNext}>&gt;</button>
                    </div>
                    <div className="home-dots-container">
                      <div className={`dots ${slideState === 'left' ? 'expand' : ''}`} data-index='0'></div>
                      <div className={`dots ${slideState === 'center' ? 'expand' : ''}`} data-index='1'></div>
                      <div className={`dots ${slideState === 'right' ? 'expand' : ''}`} data-index='2'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="biscuit">
            <img src="https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/biscuit.png" alt="biscuit image"></img>
        </div>
        <div className="pencil">
            <img src="https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/pencil2.png" alt="pencil image"></img>
        </div>
    </section>
  )
}


export default Hero


