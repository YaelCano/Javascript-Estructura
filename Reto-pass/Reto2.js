//**Reto-competitivo */


const projectCost = [363374326, 364147530, 61825163, 107306571, 128124602, 139946991, 428047635, 491595254, 879792181, 106926279];
const target = 2;

const countPairs = (costs, targetValue) => {
    const costFrequency = {};
    let final = 0;

    for (const cost of costs) {
        if (cost <= 0 || cost > 2e9) {
            return 0; // Retorna 0 si se encuentra un valor inválido
        }
        
        if (costFrequency[cost - targetValue]) {
            final += costFrequency[cost - targetValue];
        }
        
        if (costFrequency[cost + targetValue]) {
            final += costFrequency[cost + targetValue];
        }

        if (costFrequency[cost]) {
            costFrequency[cost]++;
        } else {
            costFrequency[cost] = 1;
        }
    }

    return final;
};

const result = countPairs(projectCost, target);
console.log(result);








//*Desarrollado por: Yael Mauricio Cano Palacio*/


