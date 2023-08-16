/* Ejercicio 4 /*/
//* se desea realizar la suma de los numeros pares y la suma de los numeros impares(por aparte), de los nuemros comprendidos desde uno hasta 578934*//
let pares = []
let impares = []
let sumapares = []
let sumimpares = []

for (let i = 1; i <= 578934; i++) {
    if (i % 2 == 0) {
        pares.push(i);
        sumapares += i;
    }
    else if (i % 2 != 0) {
        impares.push(i);
        sumimpares += i;
        
    }
}
console.log(sumapares);
console.log(sumimpares);

/* Desarrollado por: Yael Mauricio Cano Palacio*/ 