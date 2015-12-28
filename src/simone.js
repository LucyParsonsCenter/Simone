import React from 'react';
import { render } from 'react-dom';

import { Router, Route } from 'react-router';
import SimoneNav from 'view_controllers/navigation';
import Home from 'view_controllers/home';
import Register from 'view_controllers/register';
import InventoryVC from 'view_controllers/inventory';

// this is the router for the whole application
render((
  <Router>
    <Route path="/" component={SimoneNav}>
      <Route path="/home" component={Home} />
      <Route path="/sales" component={Register} />
      <Route path="/inventory" component={InventoryVC} />
    </Route>
  </Router>
), document.getElementById('simone'));
