import React from 'react';
import BookItem from './bookListComponents/BookItem';

function BookList() {
  return (
    <div className="book-list">
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </div>
  );
}

export default BookList;
