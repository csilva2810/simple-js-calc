var hello = require('../src/index');

describe('index.js', () => {
    describe('Hello function', () => {
        test('should return "Hello World when word is "World"', () => {
            expect(hello('World')).toBe('Hello World');
        });
    });
});
