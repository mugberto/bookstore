import { combineReducers, createStore } from 'redux';
import books from './books/books';

const rootReducer = combineReducers({
  books,
});

const store = createStore((state, action) => rootReducer(state, action));

export default store;
