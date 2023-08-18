//**--------Reto------- */

function newPassword(a, b) {
  let result = '';

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    result += a[i] + b[j];
    i++;
    j++;
  }

  while (i < a.length) {
    result += a[i];
    i++;
  }

  while (j < b.length) {
    result += b[j];
    j++;
  }

  return result;
}

// Casos de prueba
const testCases = [
  { a: 'abc', b: 'deft', expected: 'adbecf' },
  { a: 'hackerrank', b: 'mountain', expected: 'hmaocuknetrariannk' },
  // Agrega más casos de prueba aquí
];

// Función para ejecutar las pruebas
function runTests() {
  for (const testCase of testCases) {
    const result = newPassword(testCase.a, testCase.b);
    const isPassing = result === testCase.expected;
    console.log(
      `Caso de prueba: a = '${testCase.a}', b = '${testCase.b}' - Resultado: '${result}', Esperado: '${testCase.expected}' - ${
        isPassing ? 'PASSED' : 'FAILED'
    }`
    );
  }
}

// Ejecutar las pruebas
runTests();
//** Desarrollado por: Yael Mauricio Cano Palacio */