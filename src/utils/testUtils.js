import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/global';
import { render } from '@testing-library/react';


export const withThemeProvider = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);