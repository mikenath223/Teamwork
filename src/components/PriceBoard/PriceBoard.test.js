import React from 'react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import PriceBoard from './index';

describe('PriceBoard', function () {
  it('should match snapshot', () => {
    const { container } = withThemeProvider(<PriceBoard />);

    expect(container).toMatchSnapshot();
  })
})