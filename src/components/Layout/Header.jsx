import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaInstagram } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import '../../style.css'

const Header = () => {
  const { getCartItemCount } = useContext(CartContext);
  const cartItemCount = getCartItemCount();
  
  return (
        <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4">
        <div className="flex-between">
        <Link to="/" className="flex items-center textlogo">
            <img 
            src="/logo.png" 
            alt="Therapymart Logo" 
            className="logo-image"
            />
            <span>Therapymart</span>
        </Link>
        
        <div className="flex-icons">
            <a 
            href="https://www.instagram.com/therapy.mart?igsh=ZW5jYmFndWcwMGNk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 transition-colors"
            >
            <FaInstagram size={24} />
            </a>
            
            <Link to="/cart" className="relative text-blue-800 hover:text-blue-600 transition-colors">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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