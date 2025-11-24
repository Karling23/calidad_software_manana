function esPar(numero){
    if (!Number.isInteger(numero)) {
        throw new TypeError("el numero debe ser entero");
    }
    return numero % 2 === 0;
};
module.exports = {esPar};