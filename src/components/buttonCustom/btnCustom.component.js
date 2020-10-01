import React from 'react';
import './btnCustom.style.scss';
const btnCustom = ({children,googlesignin,inverted,...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : '' } ${googlesignin ? 'googleSingin': ''} custom-button`}
        
        
        {...otherProps}>
            {children}
        </button>
    );
}

export default btnCustom;
