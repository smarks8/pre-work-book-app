import React, { Component } from 'react';
import SearchArea from './SearchArea.js'
import request from 'superagent';
import BookList from './BookList'
import './stylesheet.css'

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .query({ maxResults: 40 })
            .then((data) => {
                this.setState({books: [...data.body.items]})
            })
            .catch(err => {
                console.log(err.message, err.response)})
        }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {

        return (
        <div className="Books">
            FIND SOME BOOKS
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
        </div>
        );
    }
}

export default Books;