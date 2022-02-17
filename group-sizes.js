const prompt = require('prompt-sync')();


//Prompts user for a number representing the total number of people in the class.
let num = Number(prompt('How many people are in your class? '));
// let result = (num / 3 + " Groups of 3");


//If class size is divisible by 3, print to screen.
if (num % 3 === 0) {
    let result = (num / 3);
    console.log(result + " groups of 3.")
} else if (num % 3 === 1) { //If class size / 3 has a remainder of 1, you must subtract 4 so there are 2 groups of 2 instead of a group of 1.
    let result = (num - 4); //Ex. if you have 7 people, you dont want 2 groups of 3 and a group of 1. so you subtract 4 to get 1 group of 3 and 2 groups of 2.
    console.log(result / 3 + " groups of 3" + " and 2 groups of 2. ");
} else if (num % 3 === 2) { //If class size / 3 has a remainder of 2, you subtract 2.
    let result = (num - 2); //Ex. if there are 5 people, 5 is not divisible by 3. subtract 2, making a group of 3, and leaving the other 2 people to be in a group of 2. 
    console.log(result / 3 +  " groups of 3 and 1 group of 2");
} 
