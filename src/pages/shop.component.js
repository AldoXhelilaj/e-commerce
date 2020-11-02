import React, { Component } from "react";
import CollectionsOverview from "../components/collectionsOverview/collectionsOverview.component";
import { Route } from "react-router";
import Collection from './collection.component'
class ShopPage extends Component {
  render() {
    const { match } = this.props;

    console.log(match.path.ca + "shop page");
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

export default ShopPage;
