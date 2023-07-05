const sum = require('./sum');

it('addiert 1 + 2 gleich 3', () => {
    expect(sum(1,2)).toBe(3);
});