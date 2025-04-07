import { useState } from 'react';
import LazyImage from '../common/LazyImage';
import { FaWhatsapp, FaWallet } from 'react-icons/fa';
import '../../style.css'; // ensure this path is correct

const ProductDetail = ({ product, onAddToCart }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in purchasing ${product.name} for $${product.price}`;
    window.open(`https://wa.me/96171631597?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <div className="product-detail">
      <div className="product-detail-inner">
        <div className="product-image-section">
          <LazyImage 
            src={product.images[selectedImageIndex]} 
            alt={product.name}
            width="100%"
            height="600px"
            className="product-image"
          />
          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`product-thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
              >
                <LazyImage 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`}
                  width="80px"
                  height="80px"
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
          
          <div className="product-actions">
            <button 
              onClick={handleWhatsAppClick}
              className="whatsapp-btn"
            >
              <FaWhatsapp className="action-icon" /> Buy via WhatsApp
            </button>
            
            <button 
              onClick={() => onAddToCart(product)}
              className="add-to-cart-btn"
            >
              <FaWallet className="action-icon" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
