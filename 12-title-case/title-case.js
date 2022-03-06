// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let words = str.split(" ")
    for (let i=0; i<words.length; i++){
        let word = words[i].split("");
        word[0]=word[0].toUpperCase();
        words[i] = word.join("")
        console.log(words)
    }
    return words.join(" ")
}