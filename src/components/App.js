import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './appComponents/Header';
import Books from './appComponents/Books';
import Categories from './appComponents/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Books />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
