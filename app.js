const nameFunction = require('./modules/names')
const hobbiesFunction = require('./modules/hobbies')

function person() {
    let result = {
        fullName: nameFunction.fullName('Mario', 'Mario'),
        hobbies: hobbiesFunction.hobbies('Idraulica', 'Collezionismo', 'Salvataggi'),
    }
    return result;
}

console.log(person());