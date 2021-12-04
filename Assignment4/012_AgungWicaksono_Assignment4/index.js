// panduan menjalankan program
// arahkan ke direktori index.js 
// jalankan perintah node index.js
// ikuti perintah yang terdapat pada layar console


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Javascript Calculator");
rl.question("Enter first number : ", function (nilaiA) {
    rl.question("Enter second number : ", function (nilaiB) {
        let firstNumber = Number(nilaiA);
        let secondNumber = Number(nilaiB);
        if (isNaN(firstNumber - secondNumber)) {
            console.log("Input must be a number!");
        } else {
            console.log("Sum:", firstNumber + secondNumber);
            console.log("Difference:", firstNumber - secondNumber);
            console.log("Product:", firstNumber * secondNumber);
            console.log("Quotient:", firstNumber / secondNumber);
            console.log("Remainder:", firstNumber % secondNumber);
            console.log("Value of first number after increment:", ++firstNumber);
            console.log("Value of second number after decrement:", --secondNumber);
        }
        rl.close();
    });
});

rl.on("close", function () {
    console.log("\nGood Bye !!!");
    process.exit(0);
});