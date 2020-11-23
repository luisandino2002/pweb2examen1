function calcularPromedio(arrayNumeros) {
    let promedio = 0;
    arrayNumeros.forEach(element => {
        promedio = promedio + element;
    });
    return promedio / arrayNumeros.length;
}
function calcularMediana(arrayNumeros) {
    let mediana = 0;
    let valorBajoMedio = 0;
    let valorAltoMedio = 0;
    arrayNumeros.sort((a, b) => a - b);
    valorBajoMedio = Math.floor((arrayNumeros.length - 1) / 2);
    valorAltoMedio = Math.ceil((arrayNumeros.length - 1) / 2);
    mediana = (valorBajoMedio + valorAltoMedio) / 2;
    return mediana;
}
function valorMaximo(arrayNumeros) {
    arrayNumeros.sort((a, b) => a - b);
    return arrayNumeros[arrayNumeros.length - 1];
}
function valorMinimo(arrayNumeros) {
    arrayNumeros.sort((a, b) => a - b);
    return arrayNumeros[0];
}
console.log(calcularPromedio([2, 45, 4, 63, 24, 45, 42, 75, 41, 45]));
console.log(calcularMediana([2, 45, 4, 63, 24, 45, 42, 75, 41, 45]));
console.log(valorMaximo([2, 45, 4, 63, 24, 45, 42, 75, 41, 45]));
console.log(valorMinimo([2, 45, 4, 63, 24, 45, 42, 75, 41, 45]));
