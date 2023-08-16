/*################################*/
/**          EJERCICIO-6         */
/*Imprima la siguiente secuencia usando ciclos */
/*1
12
123
1234
12345
123456
1234567
12345678
123456789*/

//Definir el numero de filas*//
var numRow = 9;

//Se usa un ciclo
for (var i = 1; i <= numRow; i++) {
    var row = '';/!Esta es la cadena para almacenar los numeros/

    //Se usa otro ciclo para contruir la cadena//
    for(var j =1; j <= i; j++){
        row += j;//esto agrega el numero a la cadena//
    }
    console.log(row);//Imprimir la fila actual// 
}


/* Desarrollado por : Yael Mauricio Cano Palacio*/ 