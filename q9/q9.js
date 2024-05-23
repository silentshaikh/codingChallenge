//Find Average of Array
(function () {
    var arrNum = [10, 20, 30, 40, 50, 60];
    var reducValue = arrNum.reduce(function (prev, curr) {
        return prev + curr;
    });
    var findAve = reducValue / arrNum.length;
    console.log(findAve);
})();
