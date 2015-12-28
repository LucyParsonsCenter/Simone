import React from 'react';
import { render } from 'react-dom';

import { Router, Route } from 'react-router';

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>Hey!</h1>
      </div>
    )
  }
})

render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.body)
