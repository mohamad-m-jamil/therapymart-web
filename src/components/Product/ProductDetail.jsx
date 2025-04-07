import { useState } from 'react';
import LazyImage from '../common/LazyImage';
import { FaWhatsapp, FaWallet } from 'react-icons/fa';

const ProductDetail = ({ product, onAddToCart }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in purchasing ${product.name} for $${product.price}`;
    window.open(`https://wa.me/96171631597?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <LazyImage 
            src={product.images[selectedImageIndex]} 
            alt={product.name}
            width="100%"
            height="400px"
            className="w-full h-96 object-contain"
          />
          <div className="flex p-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`cursor-pointer mr-2 border-2 ${
                  selectedImageIndex === index ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <LazyImage 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`}
                  width="80px"
                  height="80px"
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Buy via WhatsApp
            </button>
            
            <button 
              onClick={() => onAddToCart(product)}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <FaWallet className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;