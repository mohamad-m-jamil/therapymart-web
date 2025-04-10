import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaInstagram } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import '../../style.css';
import logo from '../../../logo.png';

const Header = () => {
  const { getCartItemCount } = useContext(CartContext);
  const cartItemCount = getCartItemCount();
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex-between">
          <Link to="/" className="textlogo">
            <div className="logo-container">
            <img 
              src={logo}
              alt="Therapymart Logo"
              className="logo-image"
            />
              <span className="textt">Therapymart</span>
            </div>
          </Link>
          
          <div className="flex-icons">
            <a 
              href="https://www.instagram.com/therapy.mart?igsh=ZW5jYmFndWcwMGNk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            
            <Link 
              to="/cart" 
              className="relative text-blue-800 hover:text-blue-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <FaShoppingCart size={22} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;