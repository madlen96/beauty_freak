import React, { useContext } from 'react';
import './../main/App.css';
import { MakeUpContext } from './../main/MakeUpContext';
import MakeUpItems from './../components/MakeUpItems';
const MakeUpItemsSearch = () => {
    const { handleSearchChange, handleSubmit, search } = useContext(MakeUpContext);
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={(e) => handleSearchChange(e)}></input>
                <button className="search-button" type="submit"> search </button>
            </form>
            <div className="makeUpItems" >
                <MakeUpItems />
            </div> </div>
    );
}
export default MakeUpItemsSearch;