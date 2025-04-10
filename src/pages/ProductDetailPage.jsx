import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaTimes, FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import ProductDetail from '../components/Product/ProductDetail';
import ProductCard from '../components/Product/ProductCard';
import { getProductById, getAllProducts } from '../data/products';
import { CartContext } from '../context/CartContext';
import '../style.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(CartContext);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchedProduct = getProductById(parseInt(id));
      setProduct(fetchedProduct);
      
      // Get related products (same category, excluding current product)
      if (fetchedProduct) {
        const allProducts = getAllProducts();
        const related = allProducts
          .filter(p => p.category === fetchedProduct.category && p.id !== fetchedProduct.id)
          .slice(0, 8); // Limit to 8 related products
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }, 300);
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    
    // Automatically hide popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };
  
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
    <div className="relative">
      {/* Popup Overlay */}
      {showPopup && (
      <div className="popup-overlay">
        <div className="popup">
          <button onClick={closePopup} className="close-btn">
            <FaTimes />
          </button>
          <FaCheckCircle style={{ color: 'green', fontSize: '40px', marginBottom: '10px' }} />
          <h3>Added to Cart</h3>
          <p>{product.name} has been added to your cart successfully!</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/cart" className="button button-primary">
              <FaShoppingCart style={{ marginRight: '8px' }} /> View Cart
            </Link>
            <button onClick={closePopup} className="button button-secondary">
              Continue Shopping
            </button>
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
        onAddToCart={handleAddToCart} 
      />

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
      <div className="related-products-section">
        <h2 className="related-products-title">Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map(relatedProduct => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    )}

    </div>
  );
};

export default ProductDetailPage;