import { add } from './add'

test('displays sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
});