import React from 'react';
import { ThemeProvider } from 'styled-components';
import Landing from 'pages/Landing';
import { theme } from 'styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
