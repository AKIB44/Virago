import React from 'react'
import './ProductShowcase.css'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Luxury Bath Towels',
      description: 'Premium quality cotton towels with soft texture and excellent absorbency',
      price: 'From ₹1,499',
      image: '/assets/collection1.jpeg',
      category: 'Towels'
    },
    {
      id: 2,
      name: 'Designer Bathrobes',
      description: 'Plush and comfortable bathrobes for ultimate relaxation',
      price: 'From ₹2,999',
      image: '/assets/collection2.jpeg',
      category: 'Bathrobes'
    },
    {
      id: 3,
      name: 'Custom Printed Collection',
      description: 'Personalized towels and robes with your custom designs',
      price: 'From ₹1,979',
      image: '/assets/collection 3.jpeg',
      category: 'Custom'
    },
    {
      id: 4,
      name: 'Premium Wardrobe Essentials',
      description: 'Elegant wardrobe items to complement your style',
      price: 'From ₹2,489',
      image: '/assets/collection4.jpeg',
      category: 'Wardrobe'
    },
    {
      id: 5,
      name: 'Spa Collection',
      description: 'Luxurious spa-grade products for a complete experience',
      price: 'From ₹1,739',
      image: '/assets/collection5.jpeg',
      category: 'Spa'
    },
    {
      id: 6,
      name: 'Limited Edition Series',
      description: 'Exclusive designs available for a limited time',
      price: 'From ₹3,479',
      image: '/assets/collection6.jpeg',
      category: 'Limited'
    },
    {
      id: 7,
      name: 'Premium Gift Sets',
      description: 'Perfect gift combinations for special occasions',
      price: 'From ₹3,989',
      image: '/assets/collection7.jpeg',
      category: 'Gifts'
    }
  ]

  return (
    <section id="products" className="product-showcase section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our carefully curated collection of premium bathroom and wardrobe essentials
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-overlay">
                  <button className="product-btn">View Details</button>
                </div>
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

