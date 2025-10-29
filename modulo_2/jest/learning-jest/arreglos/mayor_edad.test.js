const {mayorEdad} = require('./mayor_edad');

describe('Mayor de edad', () => {
    test('Happy path: [25,23,12,10] mayor de edad 23 ', () => {
        expect(mayorEdad([25,23,12,10])).toEqual([25,23]);
    });
    
    test('Happy path: [] mayor edad [] ', () => {
        expect(mayorEdad([])).toEqual([]);
    });
    
    test('Sad path: arreglo inválido', () => {
        expect(() => mayorEdad('edificio')).toThrow('arreglo inválido');
    });
});