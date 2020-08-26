import styled from 'styled-components';
import { breakpoints } from 'styles/global';

export const PriceSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;

  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const PriceDetails = styled.article`
  background-color: ${({ theme }) => theme.colors.papaya};
  text-align: center;
  box-shadow: 0 2px 2px silver;
  width: 200px;
  padding: 20px 0;

  ul {
    text-align: left;
    list-style: none;
    padding: 0 5px;
    margin-top: 10px;
  }

  @media ${breakpoints.md} {
    margin-top: 40px;
  }
`;

export const PriceTag = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Text = styled.li`
  font-size: ${({ theme }) => theme.textSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding-left: 16px;
  line-height: 30px;
`;

export const PriceFeature = styled.h3`
  font-size: ${({ theme }) => theme.textSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  margin-top: 25px;
`;