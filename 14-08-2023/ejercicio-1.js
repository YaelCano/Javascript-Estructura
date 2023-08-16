//##################################
//Ejercio 1
//################################

//Desarrollado por : Yael Mauricio Cano Palacio

function calcular(edad) {
    actual = 2023
    final = 2023-edad
    console.log("El año en el que naciste fue:"+edad);
}
calcular()

//Ejercio 2#######
function Celsiustofahrenheit(celsius) {
    fahrenheit = 32 + (celsius*9/5)
    console.log("La temperatura en Fahrenheit es: "+fahrenheit)
    return fahrenheit
}
Celsiustofahrenheit(60)


//Ejem
let booleano = false
if (booleano == true) {
    console.log("soy verdadero");

}else{
    console.log("No eres sincero");
}

let numero = 23
if (numero == 23) {
    console.log("Eres un 23");    
} else if(numero ==21){
    console.log("Eres un 21");
}
else{
    console.log("No eres nada:");
}
//FOR
for (let i = 1; i < 10; i++)
{
    console.log(i);
}

let arreglo = ["Mariana","pepito","santiago","camper"]
console.log(arreglo[2]);
arreglo.push("lands")
console.log(arreglo);