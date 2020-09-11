import React from 'react';
import './btnCustom.style.scss';
const btnCustom = ({children,googlesignin,...otherProps}) => {
    return (
        <button className={`${googlesignin ? 'googleSingin': ''} custom-button`}
        
        
        {...otherProps}>
            {children}
        </button>
    );
}

export default btnCustom;
