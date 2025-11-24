function contarPares(arreglo) {
    if(!Array.isArray(arreglo))
        throw new TypeError("arreglo inválido");
    
    let contador = 0;
    for(let item of arreglo) {
        if(item % 2 === 0) contador++;
    }
    return contador;
}
module.exports = {contarPares}