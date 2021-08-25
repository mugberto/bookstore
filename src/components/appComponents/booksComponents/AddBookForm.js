import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    title: 'Book title',
    category: 'Category',
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    dispatch(addBook(formState));
    e.preventDefault();
  }

  return (
    <div>
      <h2>Add NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" value={formState.title} onChange={handleChange} />
        <select name="category" value={formState.category} onChange={handleChange}>
          <option value="" hidden>Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBookForm;
