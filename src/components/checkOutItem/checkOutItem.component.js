import React from "react";
import {
  removeItem,
  removeItemCheckout,
  addItemCheckout,
} from "../../redux/cart/cart.action";
import StripeBtn from '../stripeBtn/StripeCheckoutButton.component';
import { connect } from "react-redux";

const checkOutItem = ({
  cartItem,
  removeItem,
  removeItemCheckout,
  addItemCheckout,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItemCheckout(cartItem);
          }}
        >
          &#8249;
        </div>
        {cartItem.quantity}
        <div className="arrow" onClick={() => addItemCheckout(cartItem)}>
          &#8250;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <span onClick={() => {removeItem(cartItem)}} className="remove">

        &#xD7;
      </span>
     
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (cartItem) => dispatch(removeItem(cartItem)),
    removeItemCheckout: (cartItem) => dispatch(removeItemCheckout(cartItem)),
    addItemCheckout: (cartItem) => dispatch(addItemCheckout(cartItem)),
  };
};

export default connect(null, mapDispatchToProps)(checkOutItem);
