import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'Crafted with the finest materials for lasting comfort and luxury'
    },
    {
      icon: '🎨',
      title: 'Custom Printing',
      description: 'Personalize your items with custom designs and logos'
    },
    {
      icon: '🚚',
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery to your doorstep'
    },
    {
      icon: '💎',
      title: 'Luxury Design',
      description: 'Elegant designs that elevate your everyday routine'
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: 'Sustainable materials and ethical production practices'
    },
    {
      icon: '⭐',
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee on all our products'
    }
  ]

  return (
    <section id="about" className="features section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Virago Collection?</h2>
          <p className="section-subtitle">
            Experience the difference with our premium quality and exceptional service
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

