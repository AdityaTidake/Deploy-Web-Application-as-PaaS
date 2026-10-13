import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the weather dashboard and forecast', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /seattle, washington/i })).toBeInTheDocument();
  expect(screen.getByText('18')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /5-day forecast/i })).toBeInTheDocument();
  expect(screen.getByText('Light showers')).toBeInTheDocument();
});
