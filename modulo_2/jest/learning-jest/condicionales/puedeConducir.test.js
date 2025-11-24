const {puedeConducir} = require('./puedeConducir');

describe('puedeConducir', () => {
    test('Happy path: 20 puede conducir', () => {
        const respuesta = puedeConducir(20);
        expect(respuesta).toBe('Si');
    });
    test('Happy path: 16 no puede conducir',() => {
        const respuesta = puedeConducir(16);
        expect(respuesta).toBe('No'); 
    });
    test('Sad path: edad invalida',() => {
        expect(() => puedeConducir(-1)).toThrow('edad inválida');
        expect(() => puedeConducir('19')).toThrow('edad inválida');
    });
});