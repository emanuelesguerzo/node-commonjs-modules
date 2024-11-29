// COMMON JS SYNTAX
// const fullNameFunction = require('./modules/names')
// const hobbiesFunction = require('./modules/hobbies')

// function person() {
//     let result = {
//         fullName: fullNameObj('Mario', 'Mario'),
//         hobbies: hobbiesArray('Idraulica', 'Collezionismo', 'Salvataggi'),
//     }
//     return result;
// }

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
    
console.log(chalk.bgBlue(JSON.stringify(person())));