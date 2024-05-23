// Find a Factorial
//Using Recursive Function
var fact = 5;
var findFactorial = function (fact) {
    if (fact <= 5 && fact > 0) {
        return fact * findFactorial(fact - 1);
    }
    else {
        return 1;
    }
};
console.log(findFactorial(fact));
//Using For Loop
var factLoop = 1;
for (var i = 5; i >= 1; i--) {
    factLoop *= i;
}
;
console.log(factLoop);
