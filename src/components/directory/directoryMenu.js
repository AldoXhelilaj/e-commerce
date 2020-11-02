import React, { Component } from "react";
import Menuitem from "../menu-item/menuItem";
import "./directory.style.scss";
import {connect} from 'react-redux'

const DirectoryItem=({sections})=>{



    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <Menuitem key={id} {...otherProps} />
        ))}
      </div>
    );

}

const mapStateToProps=(state)=>{
  return{
    sections:state.directory.sections
  }
}


export default connect(mapStateToProps,null)(DirectoryItem);
