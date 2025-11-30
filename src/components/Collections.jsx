import React from 'react'
import './Collections.css'

const Collections = () => {
  const collections = [
    {
      name: 'Luxury Line',
      description: 'Premium collection for the discerning customer',
      image: '/assets/collection1.jpeg'
    },
    {
      name: 'Spa Essentials',
      description: 'Complete spa experience at home',
      image: '/assets/collection5.jpeg'
    },
    {
      name: 'Designer Series',
      description: 'Fashion-forward wardrobe essentials',
      image: '/assets/collection4.jpeg'
    }
  ]

  return (
    <section id="collections" className="collections section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">
            Explore our carefully curated collections designed for every lifestyle
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card">
              <div className="collection-image-wrapper">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="collection-image"
                  loading="lazy"
                />
                <div className="collection-overlay">
                  <button className="collection-btn">Explore Collection</button>
                </div>
              </div>
              <div className="collection-info">
                <h3 className="collection-name">{collection.name}</h3>
                <p className="collection-description">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections

