var calc = require('../src/index');

describe('calc', () => {
    describe('Sum', () => {
        test('should return 4 when calc.sum(2, 2)', () => {
            expect(calc.sum(2, 2)).toBe(4);
        });
        
        test('should return 8 when calc.sum([2, 2, 2, 2])', () => {
            expect(calc.sum([2, 2, 2, 2])).toBe(8);
        });
    });

    test('should return 4 when calc.sub(8, 4)', () => {
        expect(calc.sub(8, 4)).toBe(4);
    });

    test('should return 9 when calc.mult(3, 3)', () => {
        expect(calc.mult(3, 3)).toBe(9);
    });

    test('should return 5 when calc.div(10, 2)', () => {
        expect(calc.div(10, 2)).toBe(5);
    });
});
