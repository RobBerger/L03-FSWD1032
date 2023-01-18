function combineStrings(...words: string[]): string {
    let result = "";
    words.forEach((word) => result += word + " ");
    return result;
}