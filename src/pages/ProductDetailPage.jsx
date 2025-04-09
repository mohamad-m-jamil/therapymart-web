// src/pages/ProductDetailPage.jsx - Updated with Popup Prompt
import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaTimes, FaCheckCircle } from 'react-icons/fa';
import ProductDetail from '../components/Product/ProductDetail';
import { getProductById } from '../data/products';
import { CartContext } from '../context/CartContext';
import '../style.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(CartContext);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchedProduct = getProductById(parseInt(id));
      setProduct(fetchedProduct);
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      {/* Popup Overlay */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3 className="popup-title">
                <FaCheckCircle className="check-icon" />
                Success!
              </h3>
              <button 
                onClick={() => setShowPopup(false)}
                className="popup-close"
              >
                <FaTimes />
              </button>
            </div>
            <div className="popup-body">
              <p>
                <span className="product-name">{product.name}</span> has been 
                added to your cart!
              </p>
              <div className="popup-actions">
                <button
                  onClick={() => setShowPopup(false)}
                  className="popup-button"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6">
        <Link 
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-1" /> Back to Products
        </Link>
      </div>
      
      <ProductDetail 
        product={product} 
        onAddToCart={(product) => {
          addToCart(product);
          setShowPopup(true);
        }} 
      />

      <style>
        {`
          @keyframes scaleIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scaleIn {
            animation: scaleIn 0.2s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default ProductDetailPage;