import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home/Home';

test('renders coming soon text', () => {
  render(<Home />);
  const comingSoonElem = screen.getByText(/Coming soon/i);
  expect(comingSoonElem).toBeInTheDocument();
});
