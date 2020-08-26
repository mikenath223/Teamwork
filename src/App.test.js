import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import App from './App';

describe('App', function () {
  it('should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  })

})