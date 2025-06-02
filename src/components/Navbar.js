import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const { cartItems, checkoutCount } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
      <Link to="/checkout">Checkout ({checkoutCount})</Link>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link id='login-btn' to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
