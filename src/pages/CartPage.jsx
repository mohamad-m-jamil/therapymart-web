import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTrash } from 'react-icons/fa';
import LazyImage from '../components/common/LazyImage';
// Assume CartContext is implemented

const CartPage = () => {
  // For demo purposes, hardcoded cart items
  const cartItems = [
    { id: 1, name: "Medical Scrubs", price: 45.99, quantity: 2, image: "/images/scrubs-1.jpg" },
    { id: 3, name: "Stethoscope", price: 120.00, quantity: 1, image: "/images/stethoscope-1.jpg" }
  ];
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleWhatsAppCheckout = () => {
    const itemsList = cartItems.map(item => 
      `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `Hello! I'd like to purchase the following items:\n\n${itemsList}\n\nTotal: $${total.toFixed(2)}`;
    window.open(`https://wa.me/96171631597?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-center">Quantity</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Total</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <LazyImage 
                          src={item.image} 
                          alt={item.name}
                          width="60px"
                          height="60px"
                          className="w-16 h-16 rounded object-cover mr-4"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">{item.quantity}</td>
                    <td className="px-4 py-3 text-right">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="3" className="px-4 py-3 text-right font-bold">Total:</td>
                  <td className="px-4 py-3 text-right font-bold">${total.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="flex justify-between items-center">
            <Link to="/" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
              Continue Shopping
            </Link>
            
            <button 
              onClick={handleWhatsAppCheckout}
              className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Checkout via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;