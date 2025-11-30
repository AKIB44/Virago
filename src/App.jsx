import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Collections from './components/Collections'
import CustomPrinting from './components/CustomPrinting'
import Features from './components/Features'
import Footer from './components/Footer'
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
      </main>
      <Footer />
    </div>
  )
}

export default App

