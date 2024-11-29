function fullNameObj(firstName, lastName) {
    let personFullName = {
        firstName,
        lastName,
    };
    return personFullName;
}

module.exports = {
    fullName: fullNameObj,
}


