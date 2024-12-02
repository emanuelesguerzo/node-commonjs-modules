// COMMON JS SYNTAX
// const fullNameFunction = require('./modules/names')
// const hobbiesFunction = require('./modules/hobbies')

// function person() {
//     let result = {
//         fullName: fullNameFunction.fullNameObj('Mario', 'Mario'),
//         hobbies: hobbiesFunction.hobbiesArray('Idraulica', 'Collezionismo', 'Salvataggi'),
//     }
//     return result;
// }

// console.log(person())

//BONUS IN ES6
import fullNameObj from "./modules/names.js";
import hobbiesArray from "./modules/hobbies.js";
import chalk from "chalk";

const person = () => {
    return {
        fullName: fullNameObj('Mario', 'Mario'),
        hobbies: hobbiesArray('Idraulica', 'Collezionismo', 'Salvataggi'),
    }
}
    
console.log(chalk.bgBlue(JSON.stringify(person(), null, 2)));

//CLASSROOM REFACTORING
// import getFullName from "./modules/names.js";
// import getHobbies from "./modules/hobbies.js";
// import chalk from "chalk";

// const person = () => {
//     return {
//         fullName: getFullName('Mario', 'Mario'),
//         ...getHobbies('Idraulica', 'Collezionismo', 'Salvataggi'),
//     }
// }