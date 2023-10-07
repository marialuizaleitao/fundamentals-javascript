function findLongestWord(text) {

    // Remove punctuation and splits the text into words
    const words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");

    let longestWord = "";

    // Iterates over the words to find the longest on
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}

// Example of use
const text = "I took the one less traveled by. And that has made all the difference.";
const longestWord = findLongestWord(text);
console.log(longestWord); // Output: "difference"