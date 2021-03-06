import React from "react";
import { render } from "react-dom";

import { Router, Route, IndexRoute } from "react-router";
import SimoneNav from "view_controllers/navigation";
import HomeVC from "view_controllers/home";
import RegisterVC from "view_controllers/register";
import InventoryVC from "view_controllers/inventory";

// this is the router for the whole application
render((
  <Router>
    <Route path="/" component={SimoneNav}>
      <IndexRoute component={HomeVC}></IndexRoute>
      <Route path="/home" component={HomeVC}></Route>
      <Route path="/sales" component={RegisterVC}></Route>
      <Route path="/inventory" component={InventoryVC}></Route>
    </Route>
  </Router>
), document.getElementById("simone"));
