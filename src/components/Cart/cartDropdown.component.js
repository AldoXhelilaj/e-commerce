import React from "react";
import "./cartDropdown.style.scss";
import CustomButton from "../buttonCustom/btnCustom.component";
import  CartItems  from "../cartItem/cartItem.component";
import { connect } from "react-redux";

const cartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
    
        {cartItems.map((cartItem) => (
           
          <CartItems key={cartItem.id} item={cartItem} />
        ))}

      </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartToggle.cartItem,
  };
 
};

export default connect(mapStateToProps, null)(cartDropdown);
