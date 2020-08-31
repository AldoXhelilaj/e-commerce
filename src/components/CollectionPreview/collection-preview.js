import React from "react";
import CollectionItem from '../CollectionItem/collectionItem.component';
import './collectionPreview.style.scss'


const CollectionPreview = ({ title, name, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map((items,id) => (
          <CollectionItem  key={id} {...items} />       ))}
          </div>
    </div>
  );
};

export default CollectionPreview;
