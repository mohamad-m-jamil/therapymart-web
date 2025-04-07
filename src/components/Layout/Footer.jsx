import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../style.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-title">Therapymart</h3>
            <p>Quality medical merchandise for healthcare professionals.</p>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <FaWhatsapp className="footer-icon" /> +961 71 631 597
            </div>
            <div className="footer-contact">
              <FaInstagram className="footer-icon" /> @therapy.mart
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/cart" className="footer-link">My Cart</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Therapymart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
