import React from 'react';
import './collectionItem.style.scss'

const CollectionItem = ({id,name,price,imageUrl}) => {
    return (
        <div className="collection-item">
        <div  style={{backgroundImage:`url(${imageUrl})`,width:"100%",height:"300px"}} className="image">




        </div>
        <div className="collection-footer">

        <span className="name">{name}</span>
        <span className="price">${price}</span>


        </div>

            
        </div>
    );
}

export default CollectionItem;
