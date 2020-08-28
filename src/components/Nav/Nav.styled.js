import styled from 'styled-components';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { breakpoints } from 'styles/global';


export const Wrapper = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LinkText = styled(Link)`
  margin-right: 25px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.textSizes.large};

  &:hover {
  text-decoration: none;
  }

  &.nav-button {
    border: none;
    padding: 5px 8px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
  }

  &.nav-button:hover {
    opacity: 0.7;
  }

  @media ${breakpoints.lg} {
    font-size: ${({ theme }) => theme.textSizes.regular};
  }
`;

export const Brand = styled(Navbar.Brand)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.textSizes.larger};
  && {
    color: ${({ theme }) => theme.colors.orange};
  }
  &&:hover {
    color: ${({ theme }) => theme.colors.orange};
    opacity: 0.7;
  }

  @media ${breakpoints.lg} {
    font-size: ${({ theme }) => theme.textSizes.large};
  }
`;

export const NavButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.orange};
  
  &&:hover {
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors.orange}
  }
`;