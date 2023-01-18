"use strict";
function combineStrings(...words) {
    let result = "";
    words.forEach((word) => result += word + " ");
    return result;
}
console.log(combineStrings());
console.log(combineStrings("I", "love", "the", "great", "outdoors"));
