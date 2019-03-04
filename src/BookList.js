import React from 'react';
import BookCard from './BookCard.js'
import './stylesheet.css'

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail} 
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                publisher={book.volumeInfo.publisher}
                                externalLink={book.volumeInfo.infoLink}
                            />
                })
            }
        </div>
    )
}

export default BookList;