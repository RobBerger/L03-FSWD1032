"use strict";
function fullName(firstName, middleName, lastName) {
    return `The full name is ${firstName} ${middleName} ${lastName}.`;
}
console.log(fullName("Bob", "Hawk", "Nelson")); //correct function call 
console.log(fullName("Bob", "Hawk")); // not enough parameters 
console.log(fullName("Bob", "Hawk", "Nelson", "McGraw")); // too many parameters
