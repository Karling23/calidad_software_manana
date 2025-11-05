const { deepMerge, normalizarAlumno } = require('./deepMerge');

describe('Igualdad profunda', () => {
    test('Happy path: deeoMerge' + 'combina objetos anidados por valor', () => {
        const a = {
            user: {nombre: 'Ana', rol: 'Estudiante'}, activo: true
        };
        const b = {
            user: {rol: 'tutor'}, activo: true, extra: 1
        };
        const response = deepMerge(a,b)
        expect(response).toEqual({
            user: 
            {nombre: 'Ana', rol: 'tutor'}, activo: true, estra: 1
        });
    });
    test('Happy path: deeoMerge' + 'retorna estructura con promedio', () => {
        const alumno = {nombre: 'Ana', notas: [8,9,7]};
        const response = normalizarAlumno(alumno);
        expect(response).toEqual({
            user: 
            {nombre: 'Ana', notas: [8,9,7]}, promedio: 8
        });
    });
    test('Sad path: deep merge con parámetros invalidos', 
        () => {
        expect(() => deepMerge(null, {})).toThrow('b debe ser objeto');
        expect(() => deepMerge({}, [])).toThrow('b debe ser objeto');
    });
});