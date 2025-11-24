const mayorEdadFilter = require('./mayorEdadFilter');

describe('Mayor de edad', () => {
    test('Happy path: [15, 18, 26, 28] mayor [18, 26, 28]', () => {
        expect(mayorEdadFilter([15, 18, 26, 28])).toEqual([18, 26, 28]);
    });
    test('Happy path: [] mayores []', () => {
        expect(mayorEdadFilter([])).toEqual([]);
    });
    test('Sad path: edad invalida', () => {
        expect(() => mayorEdadFilter('arreglo')).toThrow('arreglo invalido');
    });
});