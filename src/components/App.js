import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadBooksAPI } from '../redux/books/books';
import Header from './appComponents/Header';
import Books from './appComponents/Books';
import Categories from './appComponents/Categories';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadBooksAPI()), []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
