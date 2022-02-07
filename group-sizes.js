const prompt = require('prompt-sync')();

let num = Number(prompt('How many people are in your class? '));
let result = num / 3;

if (num % 3 === 0) {
    console.log(num / 3);
} else if (num % 3 === 1) {
    let result = (num - 4); 
    console.log(result / 3 + " groups of 3" + " and 2 groups of 2. ");
} else if (num % 3 === 2) {
    let result = (num - 2);
    console.log(result / 3 +  " groups of 3 and 1 group of 2");
} 