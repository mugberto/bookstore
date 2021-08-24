import React from 'react';

function AddBookForm(props) {
  const { placeholder, placeholderValue } = props;
  return (
    <div>
      <h2>Add NEW BOOK</h2>
      <form>
        <input type="text" name="title" placeholder="Book title" />
        <select name="category" defaultValue='Category'>
          <option value="">Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
        </select>
        <button type="button" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
}


export default AddBookForm;
