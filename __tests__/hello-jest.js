console.log('Hello from Jest!');

describe('Jest', () => {
  it('can run tests', () => {
    console.log('Hello from a Jest test!');
  });

  describe('expect', () => {
    it('can check truthy-ness', () => {
      expect(true).toBeTruthy();
      expect(1).toBeTruthy();
      expect('false').toBeTruthy();
      expect({}).toBeTruthy();
      expect([]).toBeTruthy();
    });

    it('can check truthy-ness', () => {
      expect(false).toBeFalsy();
      expect(0).toBeFalsy();
      expect('').toBeFalsy();
      expect(null).toBeFalsy();
      expect(undefined).toBeFalsy();
      expect(NaN).toBeFalsy();
    });
  });
});
