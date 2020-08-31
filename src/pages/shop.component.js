import React, { Component } from "react";
import SHOP_DATA from "../shop.data";
import CollectionPreview from "../components/CollectionPreview/collection-preview";

class ShopPage extends Component {
  state = {
    collection: SHOP_DATA,
  };

  render() {
    return (
      <div>
        {this.state.collection.map(({ id, title,items, ...collectionProps }) => (
          <CollectionPreview key={id} items={items} title={title}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;
