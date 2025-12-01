import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Absolutely love my custom-printed bathrobe! The quality is exceptional and the custom design looks exactly as I imagined. Highly recommend!',
      product: 'Custom Printed Collection'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Premium quality towels that are soft and highly absorbent. The Spa Collection has transformed my bathroom experience. Worth every rupee!',
      product: 'Spa Collection'
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      location: 'Bangalore',
      rating: 5,
      text: 'Ordered the Luxury Bath Towels for my hotel business. Excellent quality and my guests always compliment them. Great customer service too!',
      product: 'Luxury Bath Towels'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Pune',
      rating: 4,
      text: 'The Designer Bathrobes are so comfortable and stylish. Perfect for lounging at home. Fast delivery and well-packaged.',
      product: 'Designer Bathrobes'
    },
    {
      id: 5,
      name: 'Sneha Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Bought the Premium Gift Sets for my wedding favors. They were a huge hit! Beautiful packaging and excellent quality.',
      product: 'Premium Gift Sets'
    },
    {
      id: 6,
      name: 'Arjun Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'Limited Edition Series is truly exclusive. The design is unique and the material quality is top-notch. A must-have!',
      product: 'Limited Edition Series'
    }
  ]

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real reviews from satisfied customers across India
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span 
                      key={i} 
                      className={i < testimonial.rating ? 'star filled' : 'star'}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="testimonial-product">
                  {testimonial.product}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-location">📍 {testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

