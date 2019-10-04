import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders without crashing', () => {
  render(<App/>);
});



test('Has Words In It', () => {
  const { getByText } = render(<App/>)

  getByText(/player/i)
})
