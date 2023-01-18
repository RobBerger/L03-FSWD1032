function combineStrings(...words: string[]): string {
    let result = "";
    words.forEach((word) => result += word + " ");
    return result;
}

console.log(combineStrings());
console.log(combineStrings("I", "love", "the", "great", "outdoors"));