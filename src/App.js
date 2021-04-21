import React from 'react'
import './App.scss'
import Features from './components/Features'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
function App() {
    
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Team />
            <Contact />
        </>
    )
}

export default App
