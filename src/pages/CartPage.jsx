import '../style.css'; // Make sure this path is correct
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTrash } from 'react-icons/fa';
import LazyImage from '../components/common/LazyImage';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  
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
      <h1 className="page-title">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-message">Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-table-container">
            <table className="cart-table">
              <thead className="cart-table-head">
                <tr>
                  <th className="cart-th">Product</th>
                  <th className="cart-th center">Quantity</th>
                  <th className="cart-th right">Price</th>
                  <th className="cart-th right">Total</th>
                  <th className="cart-th"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="cart-row">
                    <td className="cart-td">
                      <div className="cart-product">
                        <LazyImage 
                          src={item.images && item.images.length > 0 ? item.images[0] : ''}
                          alt={item.name}
                          width="60px"
                          height="60px"
                          className="cart-product-image"
                        />
                        <span className="cart-product-name">{item.name}</span>
                      </div>
                    </td>
                    <td className="cart-td center">
                      <div className="quantity-control">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="qty-btn"
                        >
                          -
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="cart-td right">${item.price.toFixed(2)}</td>
                    <td className="cart-td right">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="cart-td right">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="cart-table-foot">
                <tr>
                  <td colSpan="3" className="cart-total-label">Total:</td>
                  <td className="cart-total-value">${total.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="cart-actions">
            <div className="action-left">
              <Link to="/" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button 
                onClick={clearCart}
                className="clear-cart-btn"
              >
                Clear Cart
              </button>
            </div>
            
            <button 
              onClick={handleWhatsAppCheckout}
              className="checkout-btn"
            >
              <FaWhatsapp className="checkout-icon" /> Checkout via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
