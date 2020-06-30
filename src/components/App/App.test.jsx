import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import App from './App';

test('renders App', () => {
  const renderedComponent = render(<MockedProvider><App /></MockedProvider>);
  expect(renderedComponent).toMatchSnapshot();
});
