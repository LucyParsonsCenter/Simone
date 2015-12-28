import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class SimoneNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/sales">
              <NavItem>Sales</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default SimoneNav;
