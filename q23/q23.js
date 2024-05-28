//Write a Function thats count multiple number in an Array
var numArr = [1, 2, 3, 1, 2, 3, 24, 5, 6, 4, 2];
var filtArr = function () {
    var remDuplArr = new Set(numArr);
    var convArr = Array.from(remDuplArr);
    var countObj = {};
    var _loop_1 = function (i) {
        var filt1 = numArr.filter(function (e) { return e === convArr[i]; });
        countObj[convArr[i]] = filt1.length;
    };
    for (var i = 0; i < convArr.length; i++) {
        _loop_1(i);
    }
    console.log(countObj);
};
filtArr();
