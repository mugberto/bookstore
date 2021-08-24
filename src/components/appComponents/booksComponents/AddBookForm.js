import React from 'react';

function AddBookForm() {
  return (
    <div>
      <h2>Add NEW BOOK</h2>
      <form>
        <input type="text" name="title" placeholder="Book title" />
        <select placeholder="">
          <option selected disabled hidden>Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
        </select>
        <button type="button" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBookForm;
