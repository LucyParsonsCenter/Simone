import React from 'react';

// class Nav extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Hey!</h1>
//       </div>
//     );
//   }
// }


class Nav extends React.Component {
  render() {
    return (
      <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem eventKey="4.4">Separated link</MenuItem>
          <MenuItem divider />
        </NavDropdown>
      </Nav>
    );
  }
}

export default Nav;
