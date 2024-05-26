//Find Minimum value in an Array
var arrNum = [1, 2, 3, 4, 5, 6, -7, 0];
var minArrNum = Math.min.apply(Math, arrNum);
console.log(minArrNum);
//Using Reduce Method
var redMinArrNum = arrNum.reduce(function (prev, curr) {
    return prev < curr ? prev : curr;
});
console.log(redMinArrNum);
