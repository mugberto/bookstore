import React from 'react';

function BookItem(props) {
  return (
    <div className="book-item">
      <div className="col">
        <div className="category-name">{props.book.name}</div>
        <div className="book-title">{props.book.title}</div>
        <div className="author-name">{props.book.author}</div>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="col">
        <span className="progress-chard" />
        <span>
          64%
          <br />
          {' '}
          completed
        </span>
      </div>
      <div className="col">
        <span>CURRENT CHAPTER</span>
        <span>CHAPTER 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default BookItem;
