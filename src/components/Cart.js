import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, incrementCheckoutCount } = useContext(CartContext);
  const navigate = useNavigate();

  function handleCheckout() {
     incrementCheckoutCount();
     navigate('/checkout');
}

  const totalSum = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

 

  return (
    <div className="cart container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Price: ₦{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Item Total: ₦{item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₦{totalSum.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
