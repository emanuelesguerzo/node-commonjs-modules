// COMMON JS SYNTAX
// function fullNameObj(firstName, lastName) {
//     let personFullName = {
//         firstName,
//         lastName,
//     };
//     return personFullName;
// }

// module.exports = {
//     fullName: fullNameObj,
// }

//BONUS IN ES6
const fullNameObj = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    };
};

export default fullNameObj;


