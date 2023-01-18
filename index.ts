function fullName(firstName: string, middleName: string, lastName: string): string
{
    return `The full name is ${firstName} ${middleName} ${lastName}.`;
}

console.log(fullName ("Bob", "Hawk", "Nelson")); //correct function call 
console.log(fullName ("Bob", "Hawk")); // not enough parameters 
console.log(fullName ("Bob", "Hawk", "Nelson", "McGraw")); // too many parameters