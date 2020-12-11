import React from "react";
import "./checkout.styles.scss";
import { selectcartTotal } from "../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckOutItem from "../components/checkOutItem/checkOutItem.component";
import StripeCheckoutButton from '../components/stripeBtn/StripeCheckoutButton.component'
import { motion } from "framer-motion";

const Checkout = ({ cartItem, priceTotal }) => {
  // const { imageUrl, price, name } = cartItem;
  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
      scale: 1
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "100vh",
      scale: 1,
      
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  const pageStyle = {
    position: "absolute",
    width: "100%"
  };
  console.log(cartItem);
  return (
    <motion.div
    key
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
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

      <StripeCheckoutButton price={priceTotal}/>
    </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartToggle.cartItem,
    priceTotal: selectcartTotal(state),
  };
};
export default connect(mapStateToProps, null)(Checkout);
