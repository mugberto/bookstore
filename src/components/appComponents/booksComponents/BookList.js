import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './bookListComponents/BookItem';

function BookList() {
  const books = useSelector(state => state.books);
  return (
    <div className="book-list">
      { books.map(book => <BookItem book={book}/>) }
    </div>
  );
}

export default BookList;
