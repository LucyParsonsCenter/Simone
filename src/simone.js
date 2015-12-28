import React from 'react';
import { render } from 'react-dom';

import { Router, Route } from 'react-router';
import SimoneNav from 'view_controllers/navigation';

// this is the router for the whole application
render((
  <Router>
    <Route path="/" component={SimoneNav}>
    </Route>
  </Router>
), document.getElementById('simone'));
