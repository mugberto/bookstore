import React from 'react';
import PropTypes from 'prop-types';

function BookItem(props) {
  const {
    cat, title, author, prog,
  } = props;
  return (
    <div className="book-item">
      <div className="col">
        <div className="category-name">{cat}</div>
        <div className="book-title">{title}</div>
        <div className="author-name">{author}</div>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="col">
        <span className="progress-chart" />
        <span>
          {prog}
          %
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

BookItem.propTypes = {
  cat: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  prog: PropTypes.number.isRequired,
};

export default BookItem;
