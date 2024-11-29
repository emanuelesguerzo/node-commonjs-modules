// COMMON JS SYNTAX
// const fullNameFunction = require('./modules/names')
// const hobbiesFunction = require('./modules/hobbies')

//BONUS IN ES6
import fullNameObj from "./modules/names.js";
import hobbiesArray from "./modules/hobbies.js";
import chalk from "chalk";

function person() {
    let result = {
        fullName: fullNameObj('Mario', 'Mario'),
        hobbies: hobbiesArray('Idraulica', 'Collezionismo', 'Salvataggi'),
    }
    return result;
}
    
console.log(chalk.bgBlue(JSON.stringify(person())));