import React from 'react';
import '../menuItem.style.scss'
import { withRouter } from 'react-router';

   
const MenuItem = ({ ...props }) => {




    console.log(props)


    let menuclass = ['menu-item']
    if (props.size) {
        menuclass.push(props.size)


    }

    return (


        <div className={menuclass.join(" ")}  onClick={()=>props.history.push(`${props.match.url}${props.linkUrl}`)}>
            <div style={{ backgroundImage: `url(${props.imageUrl})` }} className="background-hover"></div>

            
            <div className="content">
       


                <h1 className="title">{props.title}</h1>
                <span className='subtitle'>shop now</span>
            </div>
        </div>

    );
}

export default withRouter(MenuItem)
