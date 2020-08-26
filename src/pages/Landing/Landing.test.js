import React from 'react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Landing from './index';

describe('Landing page', function () {
  it('should match snapshot', () => {
    const { container } = withThemeProvider(<Landing/>);
    
    expect(container).toMatchSnapshot();
  })
  
})