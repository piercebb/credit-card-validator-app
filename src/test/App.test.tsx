import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from '../App';

test('renders app', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);
  const app = screen.getByTestId('app');
  const input = screen.getByTestId('card-input');
  const submit = screen.getByTestId('validate-submit');
  expect(app).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});
