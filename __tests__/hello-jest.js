console.log('Hello From Jest');
//can use test('whatever here', => {}) instead of describe
describe('Jest', () => {
  it('can run tests', () => {
    console.log('Hello From Test');
  })
  describe('expect', () => {
    it('can check truthy-ness', ()=> {
      expect(0).toBeFalsy();
      expect(1).toBeTruthy();

      expect('').toBeFalsy();
      expect('false').toBeTruthy();
    })
  });
});