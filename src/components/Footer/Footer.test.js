import React from 'react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Footer from './index';

describe('Footer', function () {
  it('should match snapshot', () => {
    const { container } = withThemeProvider(<Footer />)

    expect(container).toMatchSnapshot();
  })
})