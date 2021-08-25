const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    progress: 54,
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    progress: 64,
  },
  {
    id: 3,
    title: 'Capital In The Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    progress: 78,
  },
];

export default function books(state = defaultState, action) {
  switch(action.type) {
    case ADD_BOOK:
      return state.concat({
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
        progress: 0,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id );
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
  }
}