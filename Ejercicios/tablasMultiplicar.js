for (let numMult = 1; numMult <= 10; numMult++) { //inicializo la variable numMult en 1, el codigo se repite dentro del bucle mientras numMult sea menor o igual a 10 e incrementa en 1 despues de cada iteraccion   
    for (let i = 1; i <= 10; i++) {
        console.log(`${numMult} x ${i} = ${numMult * i }`);
    }
    console.log('-------------------'); // Separador entre tablas
}