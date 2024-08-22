
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../styles/CartWidget.css'; 
const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="badge">3</span>
    </div>
  );
};

export default CartWidget;




