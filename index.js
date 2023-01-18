"use strict";
function fullName(firstName, middleName, lastName) {
    if (lastName) {
        return `The full name is ${firstName} ${middleName} ${lastName}.`;
    }
    else {
        return `The full name is ${firstName} ${middleName}.`;
    }
}
console.log(fullName("Bob", "Hawk", "Nelson")); //correct function call 
console.log(fullName("Bob", "Hawk")); // still works
console.log(fullName("Bob", "Hawk", "Nelson", "McGraw")); // too many parameters
