import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list', () => {
  render(<App />);
  const listElement = screen.getByText(/Walk the dog/i);
  expect(listElement).toBeInTheDocument();
});
