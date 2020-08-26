import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.pink};
`;

export const GroupText = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.textSizes.regular};
  color: ${({ theme }) => theme.colors.white};
  width: max-content;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

export const LinkText = styled.a`
  font-size: ${({ theme }) => theme.textSizes.small};
  color: ${({ theme }) => theme.colors.white};
  display: block;
  text-transform: capitalize;
  margin: 10px 0;
  cursor: pointer;
  width: max-content;

  &:hover {
    color: inherit;
  }
`

export const BottomBar = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkpink};
  margin-top: 40px;
  padding: 0 50px;
  height: 40px;

  img {
    width: 120px;
    height: 20px;
  }
`;

export const CopyrightText = styled.h6`
  font-size: ${({ theme }) => theme.textSizes.small};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`