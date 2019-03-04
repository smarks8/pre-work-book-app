import React from 'react';
import './stylesheet.css'

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text"/>
                <button className="search-button" type="submit">SEARCH BOOKS</button>
            </form>
        </div>
    )
}

export default SearchArea;