import { render, screen } from '@testing-library/react';
import App, { isValidLuhn } from './App';

test('renders app with input and button', () => {
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
  const input = screen.getByTestId('card-input');
  const submit = screen.getByTestId('validate-submit');
  expect(input).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});

test('isValidLuhn validates non-numeric strings', () => {
  const invalid_string = 'foobar';
  expect(isValidLuhn(invalid_string)).toEqual(false);
});

test('isValidLuhn validates empty strings', () => {
  const empty_string = '';
  expect(isValidLuhn(empty_string)).toEqual(false);
});

test('isValidLuhn validates American Express cards', () => {
  const AE_card = '371449635398431';
  expect(isValidLuhn(AE_card)).toEqual(true);
});

test('isValidLuhn validates MasterCard cards', () => {
  const MasterCard_card = '5555555555554444';
  expect(isValidLuhn(MasterCard_card)).toEqual(true);
});

test('isValidLuhn validates Visa cards', () => {
  const Visa_card = '4012888888881881';
  expect(isValidLuhn(Visa_card)).toEqual(true);
});

test('isValidLuhn validates typo card: wrong number', () => {
  const offByOne_card = '371449535398431';
  expect(isValidLuhn(offByOne_card)).toEqual(false);
});

test('isValidLuhn validates typo card: missing digit', () => {
  const offByOne_card = '412888888881881';
  expect(isValidLuhn(offByOne_card)).toEqual(false);
});
