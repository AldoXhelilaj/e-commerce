import React, { Component } from 'react';
import SHOP_DATA from "../../shop.data";
import CollectionPreview from "../CollectionPreview/collection-preview";
import {connect} from 'react-redux'
import {selectShopItems,shopItemsObjects }from '../../redux/shop/shop.selectors'


 const CollectionsOverview=({addShop})=> {
    // state = {
    //     collection: SHOP_DATA,
    //   };
    
  
       
        return (
          <div className="collections-overview">
            {addShop.map(({ id, title,items, ...collectionProps }) => (
              <CollectionPreview key={id} items={items} title={title}/>
            ))}
          </div>
        );
      }



    const mapStateToProps = (state)=>{
        return{
            addShop:shopItemsObjects(state)
        }
    }
export default  connect(mapStateToProps,null)(CollectionsOverview);
