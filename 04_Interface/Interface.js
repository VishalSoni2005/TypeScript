"use strict";
let admin = {
    name: 'John Doe',
    email: '0K5Wb@example.com',
    role: 'Admin',
    isActive: true,
    lastLogin: new Date(),
    password: 'password123',
};
// declare a generic type for an array of admins
let adminTwo = {
    //* optional making for certain data members in objects
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    // isActive: false,
    lastLogin: new Date(),
    // password: "secret123",
};
let adminThree = {
    name: 'John Doe',
    email: '0K5Wb@example.com',
    role: 'Admin',
    isActive: true,
    lastLogin: new Date(),
    password: 'password123',
};
let adminFour = {
    // not editable
    name: 'John Doe',
    email: '0K5Wb@example.com',
    role: 'Admin',
    isActive: true,
    lastLogin: new Date(),
    password: 'password123',
};
let abjOne = {
    name: 'John Doe',
    email: '0K5Wb@example.com',
    role: 'Admin',
    isActive: true,
    lastLogin: new Date(),
    password: 'password123',
};
let people = [abjOne];
//! function
function printPerson(person) {
    console.log(person);
}
