import React from "react";
import "./cartDropdown.style.scss";
import CustomButton from "../buttonCustom/btnCustom.component";
import CartItems from "../cartItem/cartItem.component";
import { connect } from "react-redux";
import {withRouter} from 'react-router';
import{ toggleCart} from '../../redux/cart/cart.action'

const cartDropdown = ({ cartItems,history,dispatch }) => {

  console.log(history)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {!cartItems.length ? (
          <span>Empty Cart</span>
        ) : (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem} />
          ))
        )}
      </div>
      <CustomButton onClick={()=>{
            history.push('/checkout');
      dispatch(toggleCart());
      }
  
      }>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartToggle.cartItem,
  };
};

export default withRouter(connect(mapStateToProps, null)(cartDropdown));
