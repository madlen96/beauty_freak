import React from 'react';
import style from './makeUpItem.module.css';
const MakeUpItem = ({ name, brand, image, productLink }) => {
    return (
        <div className={style.makeUpItem}>
            <img className={style.item - image} src={image} alt="" width="200px" /> <br />
            <h1>{name}</h1><br />
            <h1>{brand}</h1><br />
            <a className={style.buttonStyle} href={productLink}>go to product page</a>
        </div>
    );
}

export default MakeUpItem;