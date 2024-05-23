//Write a Function to calculate a sum of square of all element in array
var sumOfSquare = function (arr) {
    var squareElem = arr.map(function (e) { return Math.pow(e, 2); });
    var sumOfSquarElem = squareElem.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    console.log(sumOfSquarElem);
};
sumOfSquare([1, 2, 3]);
