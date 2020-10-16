import React from "react";
import "./checkout.styles.scss";
import { selectcartTotal } from "../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckOutItem from "../components/checkOutItem/checkOutItem.component";

const Checkout = ({ cartItem, priceTotal }) => {
  // const { imageUrl, price, name } = cartItem;

  console.log(cartItem);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItem.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total:${priceTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartToggle.cartItem,
    priceTotal: selectcartTotal(state),
  };
};
export default connect(mapStateToProps, null)(Checkout);
