import './cartStyles.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {
  removeFromCart,
  clearCart,
} from '../redux/features/cartSlice.js';

const Cart=()=>{
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart.cartItems);
  const totalPrice=cartItems.reduce((total, item)=>total+item.price*item.quantity, 0);
return (
    <div className="cartProducts-cntnr">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty 🛒</p>
          <Link to="/" className="back-btn">Go Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
  




};

export default Cart;