import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { 
  Wrapper,
  NavButton,
  Brand,
  LinkText
} from './Nav.styled'

const NavBar = () => (
    <Wrapper expand="md px-5">
      <Brand href="#home"><h2>teamwork</h2></Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <LinkText href="#">Why teamwork?</LinkText>
          <LinkText href="#">Solutions?</LinkText>
          <LinkText href="#">Pricing?</LinkText>
          <LinkText href="#">Resources</LinkText>
        </Nav>
        <Nav className="mr-3">
          <LinkText href="#">Login</LinkText>
          <NavButton className="border border-0 btn-warning">Try Now</NavButton>
        </Nav>
      </Navbar.Collapse>
    </Wrapper>
);

export default NavBar;