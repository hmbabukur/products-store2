import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

function Cart() {
  const { cartItems, removeFromCart, incrementCheckoutCount } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  function handleCheckout() {
    if (user) {
      incrementCheckoutCount();
      navigate('/checkout');
    } else {
      setShowModal(true);
    }
  }

  const handleLoginSuccess = () => {
    setShowModal(false); 
    incrementCheckoutCount(); 
    navigate('/checkout'); 
  };

  const totalSum = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        <div className="w-full flex flex-col items-center gap-8">
          {cartItems.map((item) => (
            <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-6 w-[90%] max-w-6xl rounded-lg shadow-md" key={item.id}>
              <img className="w-28 mb-4 sm:mb-0" src={item.thumbnail} alt={item.title} />
              <div className="text-center sm:text-center sm:ml-6 pr-4">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className='text-lg font-semibold mb-2'>Price: ₦{item.price}</p>
                <p className='text-lg font-semibold mb-2'>Quantity: {item.quantity}</p>
                <p className='text-lg font-semibold mb-2'>Item Total: ₦{item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} className="mt-4 hover:bg-gray-900 bg-black text-white text-lg px-4 py-2 rounded">
                   Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-center mt-6">
            <h3 className="text-xl font-bold">Total: ₦{totalSum.toFixed(2)}</h3>
            <button onClick={handleCheckout} className="mt-4 px-6 py-2 bg-blue-600 text-white text-lf rounded hover:bg-blue-700 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      <LoginModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default Cart;
