import styled from 'styled-components';
import { breakpoints } from 'styles/global';

export const PriceSection = styled.section`
  display: flex;
  justify-content: center;
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
  margin-right: 40px;

  ul {
    padding: 0;
    list-style: none;
    margin-top: 10px;
  }

  @media ${breakpoints.md} {
    margin: 40px 0 0;
  }
`;

export const PriceTag = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Text = styled.li`
  font-size: ${({ theme }) => theme.textSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 30px;
`;

export const PriceFeature = styled.h3`
  font-size: ${({ theme }) => theme.textSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  margin-top: 25px;
`;