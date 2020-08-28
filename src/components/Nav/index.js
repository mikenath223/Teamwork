import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'components/Button';
import { Wrapper, Brand, LinkText } from './Nav.styled';

const NavBar = ({ user: { photoURL, displayName, email }, signOut }) => (
  <Wrapper expand="md px-5">
    <Brand href="#home">teamwork</Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <LinkText to="/meetings">Meetings</LinkText>
        <LinkText to="/chats">Chats</LinkText>
        <LinkText to="/calendar">Calendar</LinkText>
      </Nav>
      <Nav className="mr-3">
        {email ? (
          <>
            <img src={photoURL || ''} alt={displayName || ''} />
            <p>{displayName || ''}</p>
            <p>{email}</p>
            <Button className="btn btn-warning border-0" onClick={signOut}>
              Logout
            </Button>
          </>
        ) : (
            <>
              <LinkText to="/auth/signin">Sign In</LinkText>
              <LinkText className="nav-button" to="/auth/signup">Try Now</LinkText>
            </>
          )}
      </Nav>
    </Navbar.Collapse>
  </Wrapper>
);

export default NavBar;