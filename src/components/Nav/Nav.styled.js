import styled from 'styled-components';
import { Button, Navbar, Nav } from 'react-bootstrap'
import { breakpoints } from 'styles/global';


export const Wrapper = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LinkText = styled(Nav.Link)`
  margin-right: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.textSizes.large};

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
`