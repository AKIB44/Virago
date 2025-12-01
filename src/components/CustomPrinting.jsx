import React from 'react'
import './CustomPrinting.css'

const CustomPrinting = () => {
  return (
    <section id="custom-printing" className="custom-printing section-padding">
      <div className="container">
        <div className="custom-printing-content">
          <div className="custom-printing-text">
            <h2 className="section-title">Custom Printing Services</h2>
            <p className="custom-description">
              Make your bathroom and wardrobe items uniquely yours with our professional 
              custom printing services. Whether it's your logo, a special design, or 
              personalized text, we bring your vision to life on premium quality materials.
            </p>
            <ul className="custom-features-list">
              <li>
                <span className="check-icon">✓</span>
                High-quality digital printing on all fabric types
              </li>
              <li>
                <span className="check-icon">✓</span>
                Custom designs and logos with color matching
              </li>
              <li>
                <span className="check-icon">✓</span>
                Minimum order quantities available
              </li>
              <li>
                <span className="check-icon">✓</span>
                Professional design consultation included
              </li>
              <li>
                <span className="check-icon">✓</span>
                Fast turnaround times for bulk orders
              </li>
            </ul>
            <div className="custom-buttons">
              <a href="#contact" className="btn btn-primary">Get a Quote</a>
              <a href="#products" className="btn btn-secondary">View Products</a>
            </div>
          </div>
          <div className="custom-printing-image">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Custom Printing Service"
              className="custom-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomPrinting

