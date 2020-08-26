import React from 'react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Nav from './index';

describe('Nav', function () {
  it('should match snapshot', () => {
    const { container} = withThemeProvider(<Nav/>);

    expect(container).toMatchSnapshot();
  })
})