import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Checkout() {
  const { cartItems, clearCart, resetCheckoutCount } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
    resetCheckoutCount();
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - N{item.price} x {item.quantity} = N{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total Amount: N{totalAmount.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Confirm Purchase</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
