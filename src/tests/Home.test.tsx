import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders coming soon text', () => {
  render(<Home />);
  const comingSoonElem = screen.getByText(/Coming soon/i);
  expect(comingSoonElem).toBeInTheDocument();
});
