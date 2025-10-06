const numero = 10
if (isNaN(numero)) {
    console.log("Entrada invalida, no es un numero ");
    return;
} else if (numero % 2 === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}