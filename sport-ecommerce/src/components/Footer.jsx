import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SportZone</h3>
            <p className="footer-description">
              Your ultimate destination for premium sports equipment and
              athletic gear.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="YouTube">
                ▶️
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li>
                <Link to="/products/football">Football</Link>
              </li>
              <li>
                <Link to="/products/basketball">Basketball</Link>
              </li>
              <li>
                <Link to="/products/running">Running</Link>
              </li>
              <li>
                <Link to="/products/fitness">Fitness</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SportZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
