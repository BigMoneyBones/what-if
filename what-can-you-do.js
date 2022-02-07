const prompt = require('prompt-sync')();

//console.log("What is your age?");

let num1 = Number(prompt('What is your age?'));

console.log(num1)

if (num1 < 16) {
    console.log("You can't drive.")
} else if (num1 === 16) {
    console.log("You can drive but not vote")
} else if (num1 === 17) {
    console.log("You can drive but not vote")
} else if (num1 === 18) {
    console.log("You can vote but not rent a car")
} else if (num1 === 19) {
    console.log("You can vote but not rent a car")
} else if (num1 === 20) {
    console.log("You can vote but not rent a car")
} else if (num1 === 21) {
    console.log("You can vote but not rent a car")
} else if (num1 === 22) {
    console.log("You can vote but not rent a car")
} else if (num1 === 23) {
    console.log("You can vote but not rent a car")
} else if (num1 === 24) {
    console.log("You can vote but not rent a car")
} else{
    console.log("You can do pretty much anything")
}
