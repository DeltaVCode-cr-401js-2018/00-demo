const adder = require('../../lib/adder');
const zero = require('../../lib/zero');

describe('adder', () => {
  it('can add zero and zero', () =>{
    expect(adder(zero, zero)).toBe(zero);
  });
  it('can add 1 and -1', () => {
    expect(adder(1, -1)).toBe(zero);
  });
  it('can add positive numbers', () => {
    expect(adder(3, 5)).toBe(8);
    expect(adder(300, 33)).toBe(333);
  })
})