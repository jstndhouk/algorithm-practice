// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let theMax=arr[0];
    for(let i=1; i<arr.length; i++){
        if (theMax<arr[i])
        theMax=arr[i]
    }
    return theMax
};
console.log(maxNum([2, 3, -2, 99, -100, -5000, 321]))