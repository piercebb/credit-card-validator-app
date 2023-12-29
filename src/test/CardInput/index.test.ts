import { isValidLuhn } from '../../components/CardInput/index';

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
