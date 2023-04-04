import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useParams } from "react-router-dom";
import './variables.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer/footer'

import Home from './pages/Home/index'
import Information from './pages/Propos/index'
import Error from './pages/Error/index';
import Product from './pages/Product/index'


//!Route
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/error">
          <Error />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/information">
          <Information />
        </Route>

        <Route exact path="/:id">
          <Product />
        </Route>

        <Redirect from='*' to='/error' />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)