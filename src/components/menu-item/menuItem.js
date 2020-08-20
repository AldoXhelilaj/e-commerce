import React from 'react';
import '../menuItem.style.scss'


const MenuItem = ({title,imageUrl,size}) => {


    

let menuclass=['menu-item']
if(size){
    menuclass.push(size)

}

    return (
 
            
            <div className={menuclass.join(" ")}>
            <div style={{backgroundImage:`url(${imageUrl})`}} className="background-hover"></div>
                    <div className="content">


                        <h1 className="title">{title}</h1>
                        <span className='subtitle'>shop now</span>
                    </div>
                </div>
      
    );
}

export default MenuItem
