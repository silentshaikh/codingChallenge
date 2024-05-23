//Write a Function thats takes a number as input and return the sum of tis digits
var sumOfDigit = function (num) {
    var numToArr = Array.from(String(num), Number);
    console.log(numToArr);
    var arrReduce = numToArr.reduce(function (prev, curr) {
        return prev + curr;
    });
    console.log(arrReduce);
};
sumOfDigit(1234);
//Without Convert in String
var sumOfDigit2 = function (num) {
    var numToArr = [];
    while (num > 0) {
        //Gets the last digit of the number
        var digits = num % 10;
        numToArr.unshift(digits);
        //Remove the last digit of the number
        num = Math.floor(num / 10);
    }
    console.log(numToArr);
    var sumOfArr = numToArr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    console.log(sumOfArr);
};
sumOfDigit2(123456);
