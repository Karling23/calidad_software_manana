function mayorEdadFilter(arreglo) {
    if (!Array.isArray(arreglo))
        throw new TypeError("arreglo invalido");
    return arreglo.filter(n => n >= 18);
}
module.exports = mayorEdadFilter;