import styled from 'styled-components';
import { Button, Navbar, Nav } from 'react-bootstrap'

export const Wrapper = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LinkText = styled(Nav.Link)`
  && {
    font-weight: ${({ theme }) => theme.fontWeight.bold}
  }
`;

export const Brand = styled(Navbar.Brand)`
  && {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const NavButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.orange};
  
  &&:hover {
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors.orange}
  }
`