import React from 'react';
import './cart-icon.style.scss'

import {ReactComponent as ShopCart} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCart } from '../../redux/cart/cart.action';


const cartIcon = ({toggleCart}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
        <ShopCart className="shop-icon"/>
            <span className="item-count">0</span>
        </div>
    );
}




const mapDispatchToProps=(dispatch)=>{

    return{
        toggleCart: ()=>dispatch(toggleCart())
    }
}
export default connect(null,mapDispatchToProps)(cartIcon);








