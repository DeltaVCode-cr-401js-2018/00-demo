const greeter = require('../../lib/greeter');
console.log(greeter);

describe('greeter', () => {
  it('can greet anonymously (without a name)', () => {
    var greeting = greeter.sayHello();

    expect(greeting).toBe('Hello Everyone');
  });

  it('can greet to a person', () => {
    expect(greeter.sayHello('Bruce')).toBe('Hello, Bruce');
  });
  it('trims whitespace', () => {
    expect(greeter.sayHello(' ')).toBe('Hello Everyone');
  })
  it('ignores null', () => {
    expect(greeter.sayHello(null)).toBe('Hello Everyone');
  })
  it('yells if given more than one name', () => {
    expect(greeter.sayHello('1', '2')).toBe('One At A Time Please');
    expect(greeter.sayHello('1','2','3','4')).toBe('One At A Time Please');
  })
});