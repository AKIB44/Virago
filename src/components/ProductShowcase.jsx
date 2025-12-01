import React, { useState, useMemo } from 'react'
import './ProductShowcase.css'

const ProductShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: 'Luxury Bath Towels',
      description: 'Premium quality cotton towels with soft texture and excellent absorbency',
      price: 'From ₹1,499',
      originalPrice: '₹2,499',
      image: '/assets/collection1.jpeg',
      category: 'Towels',
      badge: 'Popular',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Designer Bathrobes',
      description: 'Plush and comfortable bathrobes for ultimate relaxation',
      price: 'From ₹2,999',
      originalPrice: '₹4,999',
      image: '/assets/collection2.jpeg',
      category: 'Bathrobes',
      badge: 'New',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Custom Printed Collection',
      description: 'Personalized towels and robes with your custom designs',
      price: 'From ₹1,979',
      image: '/assets/collection 3.jpeg',
      category: 'Custom',
      badge: 'Custom',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Premium Wardrobe Essentials',
      description: 'Elegant wardrobe items to complement your style',
      price: 'From ₹2,489',
      originalPrice: '₹4,149',
      image: '/assets/collection4.jpeg',
      category: 'Wardrobe',
      badge: 'Sale',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Spa Collection',
      description: 'Luxurious spa-grade products for a complete experience',
      price: 'From ₹1,739',
      image: '/assets/collection5.jpeg',
      category: 'Spa',
      badge: 'Premium',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Limited Edition Series',
      description: 'Exclusive designs available for a limited time',
      price: 'From ₹3,479',
      image: '/assets/collection6.jpeg',
      category: 'Limited',
      badge: 'Limited',
      rating: 5.0
    },
    {
      id: 7,
      name: 'Premium Gift Sets',
      description: 'Perfect gift combinations for special occasions',
      price: 'From ₹3,989',
      image: '/assets/collection7.jpeg',
      category: 'Gifts',
      badge: 'Gift',
      rating: 4.8
    }
  ]

  const categories = ['All', ...new Set(products.map(p => p.category))]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <section id="products" className="product-showcase section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our carefully curated collection of premium bathroom and wardrobe essentials
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="products-controls">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button 
                className="clear-search"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                  <div className="product-badge">{product.badge}</div>
                  {product.originalPrice && (
                    <div className="discount-badge">
                      {Math.round((1 - parseFloat(product.price.replace(/[₹,]/g, '')) / parseFloat(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
                    </div>
                  )}
                  <div className="product-overlay">
                    <button className="product-btn">Quick View</button>
                    <button className="product-btn">Add to Cart</button>
                  </div>
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-text">{product.rating}</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="price-container">
                      <span className="product-price">{product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products found matching your search.</p>
            <button 
              className="reset-filters-btn"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductShowcase
