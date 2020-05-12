import React,{useContext} from 'react';
import './App.css';
import MakeUpItem from './MakeUpItem';
import {MakeUpContext} from './main/MakeUpContext';
const MakeUpItems = () => {
    const {makeUpItems} = useContext(MakeUpContext);
    return(
        <div className = "makeUpItems" >
        {makeUpItems.map(makeUpItem =>(
          <MakeUpItem 
          key={makeUpItem.id}
          name={makeUpItem.name} 
          brand={makeUpItem.brand} 
          image={makeUpItem.image_link} 
          productLink={makeUpItem.product_link} />
        ))}
        </div>
    );
}
export default MakeUpItems;