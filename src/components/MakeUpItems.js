import React, { useContext } from 'react';
import './../main/App.css';
import MakeUpItem from './MakeUpItem';
import { MakeUpContext } from '../main/MakeUpContext';
const MakeUpItems = () => {
  const { makeUpItems } = useContext(MakeUpContext);
  return (
    <div>
      <div>
        <p>Found {makeUpItems.length} items </p> <br />
      </div>
      <div className="makeUpItems" >
        {makeUpItems.map(makeUpItem => (
          <MakeUpItem
            key={makeUpItem.id}
            name={makeUpItem.name}
            brand={makeUpItem.brand}
            image={makeUpItem.image_link}
            productLink={makeUpItem.product_link} />
        ))}
      </div>
    </div>
  );
}
export default MakeUpItems;