//* Ejercicio-6 //
//* Crear un arreglo de 10 posiciones de numeros con Valores aleatorios (investiga como hacerlo).Muesestra por consola el y el valor al que corresponde.Usa dos metodos, uno para rellenar valores y otreo para mostrar*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rellenar = () => {
    for (let i = 0; i < numeros.length; i++) {
    numeros[i] = Math.floor(Math.random() * 10);
    console.log(numeros[i]);

    }
    console.log(numeros);
    return numeros;

};

const mostrar = () => {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);

    }
}

rellenar();
mostrar();
// Desarrollado por: Yael Mauricio Cano Palacio