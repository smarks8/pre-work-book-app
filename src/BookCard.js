import React from 'react';
import './stylesheet.css'

const BookCard = (props) => {
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <h3>{props.publisher}</h3>
                <button> <a target="_blank" href={props.externalLink}>MORE ABOUT ME</a></button>
            </div>
        </div>
    )
}

export default BookCard;