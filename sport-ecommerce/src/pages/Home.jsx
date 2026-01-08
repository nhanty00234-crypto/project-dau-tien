import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // Mock product data
  const featuredProducts = [
    {
      id: 1,
      name: "Pro Running Shoes",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      category: "Running",
    },
    {
      id: 2,
      name: "Basketball Pro",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
      category: "Basketball",
    },
    {
      id: 3,
      name: "Training Gloves",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      category: "Fitness",
    },
    {
      id: 4,
      name: "Football Jersey",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      category: "Football",
    },
    {
      id: 5,
      name: "Yoga Mat Premium",
      price: 44.99,
      image:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
      category: "Fitness",
    },
    {
      id: 6,
      name: "Tennis Racket",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1622163642999-9586b0f8b0a5?w=400&h=400&fit=crop",
      category: "Tennis",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Fuel Your <span className="highlight">Performance</span>
            </h1>
            <p className="hero-subtitle">
              Discover premium sports equipment designed for champions. Elevate
              your game with our curated collection of athletic gear.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-large">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Handpicked selection of our best-selling sports equipment
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="btn btn-primary">Quick View</button>
                  </div>
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button className="btn btn-secondary btn-small">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <Link to="/products" className="btn btn-outline btn-large">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>100% secure checkout</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Quality Guarantee</h3>
              <p>Premium products only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
