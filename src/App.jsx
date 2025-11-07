import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // les animations ne se rejouent pas à chaque scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Background />
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
