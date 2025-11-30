import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Virago Collection</h3>
            <p className="footer-description">
              Premium bathroom and wardrobe essentials that combine luxury, 
              comfort, and style for your everyday needs.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Pinterest">Pinterest</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#custom-printing">Custom Printing</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <span>info@viragocollection.com</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Fashion Street, Design City, DC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Virago Collection. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

