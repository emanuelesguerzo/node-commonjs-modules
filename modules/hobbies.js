// COMMON JS SYNTAX
// function hobbiesArray(hobbyOne, hobbyTwo, hobbyThree) {
//     let hobbies = {
//         hobbies: [hobbyOne, hobbyTwo, hobbyThree],
//     }
//     return hobbies;
// }

// module.exports = hobbiesArray;

//BONUS IN ES6
const hobbiesArray = (hobbyOne, hobbyTwo, hobbyThree) => {
    return {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree],
    };
};

export default hobbiesArray;

//CLASSROOM REFACTORING
// const getHobbies = (hobbyOne, hobbyTwo, hobbyThree) => ({hobbies: [hobbyOne, hobbyTwo, hobbyThree]});

// export default getHobbies;