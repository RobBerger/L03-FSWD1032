"use strict";
function fullName(firstName, middleName, lastName = "Rainman") {
    return `The full name is ${firstName} ${middleName} ${lastName}.`;
}
console.log(fullName("Bob", "Hawk", "Nelson")); //correct function call 
console.log(fullName("Bob", "Hawk")); // still works, but will now return "The full name is Bob Hawk Rainman"
//console.log(fullName ("Bob", "Hawk", "Nelson", "McGraw")); // too many parameters
