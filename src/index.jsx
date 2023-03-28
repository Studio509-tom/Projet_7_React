import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';

import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer/footer'

import Home from './pages/Home/index'
import Information from './pages/Propos/index'
//!Route
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
          <Information path="/information" />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)