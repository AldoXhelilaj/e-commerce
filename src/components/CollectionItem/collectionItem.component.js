import React from "react";
import "./collectionItem.style.scss";
import CustomBtn from "../buttonCustom/btnCustom.component";
import {addItem} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item,addItem}) => {
const { name, price, imageUrl }=item;

  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "100%",
          height: "300px",
        }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <CustomBtn inverted onClick={()=>addItem(item)}> ADD TO CART</CustomBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
