import React, { Component } from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HizVpHvaw1oZN7F8OGCAehCD8777piJUgF2FZIsP6B1Vmcn4msX3jRJJLUiWAaPUp2WP7ZSDsVSW2hsPUKhi8Tq00LxHLkuyr";

  const OnToken = (token) => {

    alert("Payment Sucessfull");

  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={OnToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
