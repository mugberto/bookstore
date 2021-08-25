const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const APP_ID = 'abMkyj5tLtp4TVRuI7vE';

const defaultState = [];

export default function books(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat({
        id: action.payload.item_id,
        title: action.payload.title,
        author: 'Suzanne Collins',
        category: action.payload.category,
        progress: 74,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

export function removeBook(payload) {
  return {
    type: REMOVE_BOOK,
    payload,
  };
}

export function addBookAPI(payload) {
  const bookDetails = { ...payload, item_id: Date.now() };
  return async function addBookThunk(dispatch) {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`, {
      method: 'POST',
      body: JSON.stringify(bookDetails),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.status === 201 && dispatch(addBook(bookDetails)));
  };
}
