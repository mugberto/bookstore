import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooksAPI } from '../../../redux/books/books';
import BookItem from './bookListComponents/BookItem';

function BookList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadBooksAPI()), []);

  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">
      { books.map((book) => {
        const {
          id, title, author, category, progress,
        } = book;
        return (
          <BookItem
            key={id}
            id={id}
            title={title}
            author={author}
            cat={category}
            prog={progress}
          />
        );
      }) }
    </div>
  );
}

export default BookList;
