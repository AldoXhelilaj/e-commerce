import React from "react";
import {removeItem }from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

const checkOutItem = ({cartItem,removeItem}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <span onClick={()=>removeItem(cartItem)} 
      
      className="remove">&#xD7;</span>



    </div>
  );
};

const mapDispatchToProps =(dispatch)=>{
    return{
        removeItem:(cartItem)=>dispatch(removeItem(cartItem))
    }
}

export default connect(null,mapDispatchToProps,null)(checkOutItem);
