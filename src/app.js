import React from 'react';
import { render } from 'react-dom';

import { Router, Route } from 'react-router';
import Nav from 'view_controllers/navigation';

// this is the router for the whole application
render((
  <Router>
    <Route path="/" component={Nav}>
      <Route path="/help" component={Help}>
    <Route>
  </Router>
), document.getElementById('simone'));
