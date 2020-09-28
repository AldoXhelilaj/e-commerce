import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import CartIcon from '../Cart/cart-icon.component'
import CartDropdown from '../Cart/cartDropdown.component';
import { toggleCart } from "../../redux/cart/cart.action";
 
const Header = ({ currentUser,cartToggle }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="option-menus">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>

        {currentUser ? (<div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
         
        ) : (
            <Link to="/signin">Sign in</Link>
        )}
        <CartIcon/>
        {cartToggle ? (  <CartDropdown/>): null }
      
      </div>
    </div>
  );
};

const mapStateToProps=state=>{
return{

  currentUser:state.user.currentUser,
  cartToggle:state.cartToggle.hidden
}

}

export default connect(mapStateToProps)(Header);
