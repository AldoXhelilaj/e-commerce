import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps=state=>{
return{

  currentUser:state.user.currentUser
}

}

export default connect(mapStateToProps)(Header);
