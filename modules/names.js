// COMMON JS SYNTAX
// function fullNameObj(firstName, lastName) {
//     let personFullName = {
//         firstName,
//         lastName,
//     };
//     return personFullName;
// }

// module.exports = fullNameObj;

//BONUS IN ES6
const fullNameObj = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    };
};

export default fullNameObj;

//CLASSROOM REFACTORING
// const getFullName = (firstName, lastName) => ({firstName, lastName });

// export default getFullName;