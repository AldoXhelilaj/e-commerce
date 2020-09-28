import React from 'react';
import './cartDropdown.style.scss';
import CustomButton from '../buttonCustom/btnCustom.component'

const cartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );
}

export default cartDropdown;
