// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let product=1;
    for(let i=num; i>1; i--){
    product=product*i;}
    return product;
};
