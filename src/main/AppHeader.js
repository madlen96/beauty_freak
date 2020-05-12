import React from 'react';
import './App.css';
const AppHeader = () => {
    return (
        <div className="imgRow">
            <img className="item-image"
                src="https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?cs=srgb&dl=assorted-cosmetic-products-2253832.jpg&fm=jpg"
                alt=""
                height="400px" />
            <img className="item-image"
                src="https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="" height="400px"
            />
            <img className="item-image"
                src="https://images.pexels.com/photos/912950/pexels-photo-912950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="" height="400px"
            />
        </div>
    );
}

export default AppHeader;