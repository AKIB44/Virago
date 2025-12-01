import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  return (
    <section className="newsletter section-padding" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1920&q=80)'}}>
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-icon">✉️</div>
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Get exclusive offers, new product launches, and styling tips delivered 
            straight to your inbox. Join our community of satisfied customers!
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="newsletter-success">
              ✅ Thank you for subscribing! Check your inbox for a confirmation email.
            </div>
          )}

          <div className="newsletter-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🎁</span>
              <span>Exclusive Offers</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🆕</span>
              <span>New Arrivals</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💡</span>
              <span>Styling Tips</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <span>Early Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

