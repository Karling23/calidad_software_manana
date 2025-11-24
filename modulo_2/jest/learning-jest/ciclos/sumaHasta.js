function sumaHasta(numero) {
    if(typeof numero !== 'number' || !Number.isInteger(numero) || numero <= 0)
        throw new TypeError("numero inválido");
    
    let total = 0;
    for(let i = 1; i <= numero; i++) {
        total += i;
    }
    return total;
}
module.exports = {sumaHasta}