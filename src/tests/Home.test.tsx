import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home/Home';
import { BrowserRouter } from 'react-router-dom';

test('renders header title', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const headerTitle = screen.getByText(/ahuggett.uk/i);
  expect(headerTitle).toBeInTheDocument();
});
