const {contarPares} = require('./contarPares');

describe('contarPares', () => {
    test('Happy path: [1,2,3,4,6] 3 ', () => {
        expect(contarPares([1,2,3,4,6])).toBe(3);
    });
    
    test('Happy path: [] 0 ', () => {
        expect(contarPares([])).toBe(0);
    });
    
    test('Sad path: numero no entero', () => {
        expect(() => contarPares('no array')).toThrow('arreglo inválido');
    });
});