const prompt = require('prompt-sync')();

let num = Number(prompt('What is your weight on earth? '));
let num1 = Number(prompt('Enter planet code: '));

if (num1 === 1) {
    let result = num * 0.78;
    console.log("If you weigh " + num + "Lbs on Earth, " + "Your weight on venus is " + " " + result + "Lbs");
} else if (num1 === 2) {
    let result = num * 0.39;
    console.log("If you weigh " + num + "Lbs on Earth, " + "Your weight on Mars is " + " " + result + "Lbs");
} else if (num1 === 3) {
    let result = num * 2.65;
    console.log("If you weigh " + num + "Lbs on Earth, " + "Your weight on Jupiter is " + " " + result + "Lbs");
} else if (num1 === 4) {
    let result = num * 1.17;
    console.log("If you weigh " + num + "Lbs on Earth, " + "Your weight on Saturn is " + " " + result + "Lbs");
} else if (num1 === 5) {
    let result = num * 1.05;
    console.log("If you weigh " + num + "Lbs on Earth, " + "Your weight on Uranus is " + " " + result + "Lbs");
} else if (num1 === 6) {
    let result = num * 1.23;
    console.log("If you weigh " + num + "Lbs on Earth, " + "Your weight on Neptune is " + " " + result + "Lbs");
}