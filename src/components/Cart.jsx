import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } }); // Navigate to Checkout page
  };

  return (
    <section className="cart py-5">
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some items to the cart!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item mb-4">
                <h5>{item.name}</h5>
                <p>Size: {item.size}</p>
                <p>Temperature: {item.temperature}</p>
                <p>Price: {item.price}₮</p>
              </div>
            ))}
            <button className="btn btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;