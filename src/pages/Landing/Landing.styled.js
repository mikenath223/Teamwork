import styled from 'styled-components';
import { breakpoints } from 'styles/global';
import { Button } from 'react-bootstrap';

export const Hero = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  min-height: 600px;
  padding: 60px;

  img {
    width: 400px;
    height: 350px;
  }

  @media ${breakpoints.md} {
    flex-direction: column-reverse;
    padding: 30px 0 80px;
  }
`;

export const HeroSection = styled.div`
    article {
    max-width: 350px;
    margin: 22px 0 30px;

    p {
      font-size: ${({ theme }) => theme.textSizes.large};
      line-height: 20px;
    }
  }
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.textSizes.xLarge};
  color: ${({ theme }) => theme.colors.white};

  @media ${breakpoints.lg} {
    font-size: 50px;
  }
  @media ${breakpoints.md} {
    font-size: 40px;
  }
`;

export const HeroButton = styled(Button)`
  background-color: transparent;
`;

export const ProductSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 100px 20px 30px 20px;
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 850px;
  margin: 0 auto 70px auto;

  &.reversed {
    flex-direction: row-reverse;
  }

  img {
    width: 350px;
    height: 250px;
  }

  @media ${breakpoints.md} {
    width: 350px;
    flex-direction: column;
    justify-content: center;

    &.reversed {
      flex-direction: column-reverse;
    }
  }
`;

export const ProductDetails = styled.div`
  margin: 20px 25px;
`;

export const Text = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 1.6px;
`;

export const BrandIcons = styled.div`
  text-align: center;
  img {
    width: 850px;
  }

  @media ${breakpoints.md} {
    img {
      width: 450px;
    }
  }
`;

