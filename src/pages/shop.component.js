import React, { Component } from "react";
import CollectionsOverview from "../components/collectionsOverview/collectionsOverview.component";
import { Route } from "react-router";
import Collection from './collection.component'
import { motion } from "framer-motion";

class ShopPage extends Component {


  


  render() {
    const pageVariants = {
      initial: {
        opacity: 0,
        x: "-100vw",
        scale: 1
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1
      },
      out: {
        opacity: 0,
        x: "100vw",
        scale: 1
      }
    };
    
    const pageTransition = {
      type: "tween",
      ease: "anticipate",
      duration: 0.5
    };
    
    const pageStyle = {
      position: "absolute"
    };
  
    
    const { match } = this.props;


    return (
      
      <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="shop-page">
 
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
      </motion.div>
    );
  }
}

export default ShopPage;
