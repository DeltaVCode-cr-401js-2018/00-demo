const greeter = require('../../lib/greeter');
console.log(greeter);

describe('greeter', () => {
  describe('sayHello()', () => {
    it('can greet anonymously (without a name)', () => {
      var greeting = greeter.sayHello();

      expect(greeting).toBe('Hello, world!');
    });

    it('can greet to a person', () => {
      expect(greeter.sayHello('Bruce')).toBe('Hello, Bruce!');
      expect(greeter.sayHello('David')).toBe('Hello, David!');
    });

    it('trims whitespace', () => {
      expect(greeter.sayHello(' ')).toBe('Hello, world!');
    });

    it('ignores null', () => {
      expect(greeter.sayHello(null)).toBe('Hello, world!');
    });

    it('yells if given more than one name', () => {
      expect(greeter.sayHello('1','2')).toBe('ONE AT A TIME PLEASE');

      expect(greeter.sayHello('1','2','3','4')).toBe('ONE AT A TIME PLEASE');
    });
  });
});
