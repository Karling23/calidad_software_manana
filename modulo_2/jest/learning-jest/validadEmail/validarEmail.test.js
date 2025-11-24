const { validarEmail } = require('./validarEmail');

describe('validar Email', () => {

    test('Happy path: devuelva false cuando el email es inválido', () => {
        const response = validarEmail('fran.n.d');
        expect(response).toBe(false);
    });

    test('Happy path: devuelva true cuando el email es válido', () => {
        const response = validarEmail('fran.nd@example.com');
        expect(response).toBe(false);
    });

    test('Sad path: cuando el email no es string debe lanzar error', () => {
        expect(() => validarEmail(3455))
            .toThrow('email debe ser string');
    });
});
