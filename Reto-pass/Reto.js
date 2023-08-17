/**################################*/
/*RETO PROGRAMACIÓN - PASSWORD CREATION*/

function newPassword(a, b) {
    let result = ''; // La cadena combinada
    
    let i = 0; // Índice para la cadena a
    let j = 0; // Índice para la cadena b
    
    while (i < a.length && j < b.length) {
        result += a[i] + b[j];
        i++;
        j++;
    }
    
    // Agregar los caracteres restantes de la cadena a
    while (i < a.length) {
        result += a[i];
        i++;
    }
    
    // Agregar los caracteres restantes de la cadena b
    while (j < b.length) {
        result += b[j];
        j++;
    
    }
    
    }
    console.log(newPassword("antonio","maria"));
    /*Desarrollado por: Yael Mauricio Cano Palacio*/
    