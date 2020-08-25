import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: `(max-width: 576px)`,
  md: `(max-width: 768px)`,
  lg: `(max-width: 992px)`,
  xl: `(max-width: 1200px)`,
};

export const theme = {
  colors: {
    white: '#fff',
    orange: '#F58635',
    dark: '#000',
    pink: '#FF4B34'
  },
  textSizes: {
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '60px',
  },
  fonts: {

  },
  fontWeight: {
    medium: 500,
    bold: 700
  },
};

const globalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialised;
    -mos-osk-font-smoothing: grayscale;
  }

  img {
    object-fit: contain;
  }
`;

export default globalStyle