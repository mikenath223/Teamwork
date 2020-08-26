import styled from 'styled-components';
import { breakpoints } from 'styles/global';
import { Button, Col } from 'react-bootstrap';

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

  @media ${breakpoints.lg} {
    img {
      width: 300px;
    }
  }

  @media ${breakpoints.md} {
    flex-direction: column-reverse;
    padding: 30px 20px 80px;
  }
`;

export const HeroSection = styled.div`
  article {
    max-width: 350px;
    margin: 22px 0 30px;
    padding: 5px;

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
    font-size: ${({ theme }) => theme.textSizes.larger};
  }

  @media ${breakpoints.md} {
    font-size: 28px;
    padding: 5px;
  }
`;

export const SectButton = styled(Button)`
  color: ${(props) => props.dark};
  border: 1px solid ${(props) => props.dark};
  background-color: transparent;
  margin-left: 10px;
  &:hover {
    background-color: unset;
    color: unset;
  }
`;

export const ProductSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 100px 20px 30px 20px;

  @media ${breakpoints.sm} {
    padding: unset;
  }
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

  @media ${breakpoints.lg} {
      width: 650px
  }

  @media ${breakpoints.md} {
    img {
      width: 270px;
    }
    width: 300px;
    flex-direction: column;
    justify-content: center;

    &.reversed {
      flex-direction: column-reverse;
    }
  }
`;

export const ProductDetails = styled.article`
  margin: 20px 25px;
`;

export const Text = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: ${(props) => props.transform || 'initial'};
  letter-spacing: 1.6px;
`;

export const BrandIcons = styled.div`
  text-align: center;
  margin-top: -50px;
  img {
    width: 850px;
  }

  @media ${breakpoints.lg} {
    img {
      width: 650px;
    }
  }

  @media ${breakpoints.md} {
    img {
      width: 450px
    }
  }
  @media ${breakpoints.sm} {
    img {
      width: 280px;
    }
  }
`;

export const Testimonial = styled.div`
  margin: 70px 0;
  text-align: center;
  img {
    margin-top: 20px;
    width: 500px
  }

  @media ${breakpoints.sm} {
    img {
      width: 280px;
    }
  }
`;

export const LearnMore = styled.section`
  width: 90%;
  margin: auto;
  padding: 35px;
  text-align: center;
  h4 {
    margin-bottom: 70px;
  }
`

export const LearnMoreSpec = styled(Col)`
  margin: 20px 10px;
  width: 200px;
  flex: unset;
  padding: 0;

  img {
    width: 120px;
  };
  p {
    font-size: ${({ theme }) => theme.textSizes.small};
  }

  @media ${breakpoints.md} {
    margin-bottom: 30px;
    img {
      width: 80px;
    }
  }
`