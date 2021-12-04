const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const encryptPassword = (password) => {
    const noSpace = password.split(' ').join('');
    let result = "";
    for (let i = noSpace.length - 1; i >= 0; i--) {
        result += String.fromCharCode(noSpace.charCodeAt(i) + 1);
    }
    return result;
}

console.log("Password Enscription: ");
rl.question("Enter Your Password: ", function (password) {
    console.log("Encrypted Password : " + encryptPassword(password));
    process.exit(0);
})