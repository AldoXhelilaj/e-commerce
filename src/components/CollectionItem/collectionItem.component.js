import React from "react";
import "./collectionItem.style.scss";
import CustomBtn from "../buttonCustom/btnCustom.component";
import { addItem, imagePlaceholder } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import Loader from "../../assets/loader/loader.component";
import ProgressiveImage from '../progresiveImage/ProgresiveImage.component'
import placeholder from '../../assets/grey-brim.jpg'

const CollectionItem = ({ item, addItem, loaded, loading }) => {
  const { name, price, imageUrl } = item;

  // let image=['image'];
  // if(!loading){
  //   image.push('placeholder-item')
  //   console.log(image)
  // }
  return (
    <div className="collection-item">
    <ProgressiveImage  src={imageUrl}  placeholder={placeholder}/>
      {/* <img src={imageUrl} className="image" onLoad={() => loaded()} /> */}
      <div className="collection-footer">
        <span className="name">{name}</span>
       span
        <span className="price">${price}</span>
      </div>

      <CustomBtn inverted onClick={() => addItem(item)}>
        {" "}
        ADD TO CART
      </CustomBtn>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.cartToggle.loaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    loaded: () => dispatch(imagePlaceholder()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
