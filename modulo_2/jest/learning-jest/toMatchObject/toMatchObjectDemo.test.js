const {
    crearUsuario,
    obtenerPerfil,
    compararUsuarios
} = require('./toMatchObjectDemo')

describe('toMatchObject matcher', () => {
    test('Happy path: usuario coincide parcialmente con estructura esperada', () => {
        const usuario = crearUsuario('Ana', 'Admin');
        expect(usuario).toMatchObject( {
            nombre: 'Ana', rol: 'Admin', activo: true
        });
    });

    test('Happy path: obtenerPerfil retorna subconjunto esperado', () => {
        const usuario = {
            nombre: 'Luis',
            rol: 'editor',
            activo: true,
            extra: 'no importa'
        };
        expect(obtenerPerfil(usuario)).toMatchObject({rol: 'editor', activo: true})
    });

    test('Sad path: errores de tipo y comparacion incorrecta', () => {
        expect(() => crearUsuario(123, 'rol')).toThrow('nombre y rol deben ser string');
        const u1 = {rol: 'user', activo: true};
        const u2 = {rol: 'admin', activo: true};
        expect(compararUsuarios(u1, u2)).toBe(false);
    });
});