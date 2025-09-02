import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { cartItems, checkoutCount } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleCheckoutClick(e) {
  e.preventDefault();
  if (!user) {
    setShowLoginModal(true);
  } else {
    navigate('/checkout');
  }
}


  return (
    <nav className="bg-gray-800 text-white w-full shadow-sm shadow-black px-12 py-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Store</h1>
        <button className="md:hidden" onClick={handleMenuToggle}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        
        <div className="hidden md:flex space-x-20 items-center">
          <Link className="font-bold text-xl hover:text-gray-300" to="/">Home</Link>
          <Link className="font-bold text-xl hover:text-gray-300" to="/cart">Cart ({cartItems.length})</Link>
          <Link className="font-bold text-xl hover:text-gray-300" to="/checkout">Checkout ({checkoutCount})</Link>
          {user ? (
            <button className='bg-green-700 hover:bg-green-800 font-bold text-white text-lg py-2 px-4 rounded-lg' onClick={logout}>
              Logout
            </button>
          ) : (
            <Link className='bg-green-700 hover:bg-green-800 font-bold text-white text-lg py-2 px-4 rounded-lg' to="/login">
              Login
            </Link>
          )}
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 mt-4">
          <Link className="font-bold text-lg hover:text-gray-300" to="/" onClick={handleMenuClose}>Home</Link>
          <Link className="font-bold text-lg hover:text-gray-300" to="/cart" onClick={handleMenuClose}>Cart ({cartItems.length})</Link>
          <button className="font-bold text-lg hover:text-gray-300 text-left" onClick={(e) => { handleCheckoutClick(e); handleMenuClose(); }}>
            Checkout ({checkoutCount})
          </button>
          {user ? (
            <button className='bg-green-700 hover:bg-green-800 font-bold text-white text-lg py-2 px-4 rounded-lg' onClick={() => { logout(); handleMenuClose(); }}>
              Logout
            </button>
          ) : (
            <Link className='bg-green-700 hover:bg-green-800 font-bold text-white text-center text-lg py-2 px-4 rounded-lg' to="/login" onClick={handleMenuClose}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
