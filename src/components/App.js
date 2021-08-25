import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './appComponents/Header';
import Books from './appComponents/Books';
import Categories from './appComponents/Categories';
import store from '../redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
