import React from 'react'
import './Hero.css'

const Hero = () => {
  // Using reliable image URLs - luxury bathroom/spa themed
  const heroImageUrl = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920'

  return (
    <section id="home" className="hero">
      <div 
        className="hero-background" 
        style={{
          backgroundImage: `url("${heroImageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">Virago Collection</h1>
          <p className="hero-subtitle">Premium Bathroom & Wardrobe Essentials</p>
          <p className="hero-description">
            Discover luxury towels, bathrobes, and custom-printed wardrobe items 
            that combine elegance with comfort. Elevate your daily routine with 
            premium quality essentials.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Shop Now</a>
            <a href="#collections" className="btn btn-secondary">View Collections</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
