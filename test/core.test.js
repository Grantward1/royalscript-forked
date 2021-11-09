//Tests core features of the language

const compiler = require('../src/compiler.js');
const cmp = compiler.Compile;
const royallib = require('../src/royallib.js');

describe('Ensure correctness of core language features', () => {
  test('Perform simple arithmetic', () => {
    const expr = '+(5, -(9, 3))';
    expect(eval(cmp(expr))).toBe(11);
  });
  test('Perform advanced arithmetic (check order of operations)', () => {
    const expr = '*(5, -(0, 1))';
    expect(eval(cmp(expr))).toBe(-5);
  });
  test('Define and use function', () => {
    const expr = (
      'defun(summinus1, args(x, y), -(+(x, y), 1)),summinus1(10, 9)');
    expect(eval(cmp(expr))).toBe(18);
  });
});

describe('Ensure correctness of royallib functions', () => {
  test('Test conditionals', () => {
    expect(royallib.even(5)).toBe(false);
    expect(royallib.even(4)).toBe(true);

    expect(royallib.odd(5)).toBe(true);
    expect(royallib.odd(4)).toBe(false);
  });
});
