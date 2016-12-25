import React, { Component } from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Hello from './components/Hello';
import New from './components/New';
import Edit from './components/Edit';
const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/posts/:_id' component={Hello} />
        <Route path='/new' component={New} />
        <Route path='/edit/:_id' component={Edit} />
      </Route>
  </Router>
);

export default renderRoutes;
