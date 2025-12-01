import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Collections from './components/Collections'
import CustomPrinting from './components/CustomPrinting'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Collections />
        <CustomPrinting />
        <Features />
        <Testimonials />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

