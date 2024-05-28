//Calculate the Average of an Array
var findAverage = function (arr) {
    var reduceArr = arr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    var findAve = reduceArr / arr.length;
    console.log(findAve);
};
findAverage([20, 30, 40, 50, 60, 70]);
