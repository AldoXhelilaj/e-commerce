import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopCart } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.action";
import {selectCartItemsCounts }from '../../redux/cart/cart.selectors'

const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
   
      <ShopCart className="shop-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //selectCartItemsCounts is a selector to improve perfomance
    itemCount: selectCartItemsCounts(state)
    
  };  
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
