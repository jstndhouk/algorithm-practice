// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    var charMap = {};
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
    //if the letter is already in the array, find that property in the array and add one.
      if (char in charMap) {
        charMap[char]++;
    //if the letter is not already in the array, add it to the object and set the value equal to one.
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  };
  
console.log(characterCount("Hello World!"))