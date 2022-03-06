// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let revString="";
    for(let i=str.length-1; i>=0; i--){
        revString= revString + str[i];
    }
    if(str===revString)
    return true
    else 
    return false
};

console.log(isPalindrome("racecar"))