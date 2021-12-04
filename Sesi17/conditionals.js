const name = "Agung";
let hungry = false;
let thirsty = true;

if (hungry && thirsty) {
    console.log(`${name} is hungry`);
} else if (!hungry && thirsty) {
    console.log(`${name} is thirsty`);
} else {
    console.log(`${name} is full`);
}

//switch-case

switch(hungry){
    case true:
        console.log(`${name} is hungry`);
        break;
    case false:
        console.log(`${name} is full`)
        break;
    default:
        console.log(`invalid value`)
}