function factorial(num) {
    if (num == 0) { 
        return 1; 
    }; 
    let result = num;
    num -= 1;
    while (num !== 0) {
        result = result * (num);
        num -= 1;
    }
    return result;
} 

let chosenNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");

let result = factorial(chosenNumber);
console.log(`Le résultat est ${result} !`)