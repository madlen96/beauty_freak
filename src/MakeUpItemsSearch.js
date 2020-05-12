import React, { useContext } from 'react';
import './App.css';
import { MakeUpContext } from './main/MakeUpContext';
const MakeUpItemsSearch = () => {
    const { handleSearchChange, handleSubmit, search } = useContext(MakeUpContext);
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={(e) => handleSearchChange(e)}></input>
            <button className="search-button" type="submit"> search </button>
        </form>
    );
}
export default MakeUpItemsSearch;