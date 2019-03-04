import React from 'react';
import BookCard from './BookCard.js'
import './stylesheet.css'

const BookList = (props) => {
    
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    console.log()
                    return <BookCard 
                                key={i}
                                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'no image!'} 
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : 'Author Unlisted'}
                                publisher={book.volumeInfo.publisher ? book.volumeInfo.publisher : "Publisher Unlisted" }
                                externalLink={book.volumeInfo.infoLink}
                            />
                })
            }
        </div>
    )
}

export default BookList;