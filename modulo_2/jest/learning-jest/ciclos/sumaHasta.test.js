const {sumaHasta} = require('./sumaHasta');

describe('esPar', () => {
    test('Happy path: numero 5 suma es ', () => {
        expect(sumaHasta(5)).toBe(15);
    });
    
    test('Happy path: numero 1 suma es', () => {
        expect(sumaHasta(1)).toBe(1);
    });
    
    test('Sad path: numero no entero', () => {
        expect(() => sumaHasta(0)).toThrow('numero inválido');
        expect(() => sumaHasta('10')).toThrow('numero inválido');
        expect(() => sumaHasta(2.5)).toThrow('numero inválido');
    });
});