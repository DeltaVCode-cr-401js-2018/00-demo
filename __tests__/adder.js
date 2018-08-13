function adder(a, b) {
  return a + b;
}

describe('adder', () => {
  it('can add zero and zero', () => {
    expect(adder(0, 0)).toBe(0);
  });

  it('can add 1 and -1', () => {
    expect(adder(1, -1)).toBe(0);
  });

  it('can add positive numbers', () => {
    expect(adder(3,5)).toBe(8);
    expect(adder(300,33)).toBe(333);
    expect(adder(0,1)).toBe(1);
  });
});
