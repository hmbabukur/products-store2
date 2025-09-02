import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

interface CartItem{
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface AuthContextType {
  user: string | null;
}

interface CartContextType{
  cartItems: CartItem[];
  clearCart: () => void;
  resetCheckoutCount: () => void;
}

function Checkout() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const { cartItems, clearCart, resetCheckoutCount } = useContext(CartContext) as CartContextType;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0 && !user) {
      setShowModal(true);
    }
  }, [user, cartItems]);

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

  const handleLoginSuccess = () => {
    setShowModal(false);
  };
  
  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
    resetCheckoutCount();
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length > 0 && !user) {
    return (
      <LoginModal
        isOpen={showModal}
        onClose={handleModalClose}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  return (
    <div className="flex flex-col justify-center items-center m-auto w-full py-14 px-10">
      <h2 className='text-2xl font-bold mb-6'>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <>
          <ul className='flex flex-col gap-4 w-full mx-auto'>
            {cartItems.map((item) => (
              <li className='items-center text-center md:text-start bg-gray-100 text-lg font-bold py-4 px-6 rounded-lg mb-4 w-[99%] max-w-6xl mx-auto' key={item.id}>
                {item.title} - ₦{item.price} x {item.quantity} = ₦{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3 className='font-bold my-4 text-lg'>Total Amount: ₦{totalAmount.toFixed(2)}</h3>
          <button className='bg-green-700 hover:bg-green-800 transition ease delay-150 text-white text-lg py-2 px-4 rounded-lg' onClick={handleCheckout}>Confirm Purchase</button>
        </>
      )}

      <LoginModal isOpen={showModal} onClose={handleModalClose} onLoginSuccess={handleLoginSuccess}/>
    </div>
  );
}

export default Checkout;
