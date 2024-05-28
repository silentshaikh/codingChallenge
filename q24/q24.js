//Write a Function thats takes an array as number and return the number thats appear most frequently
var numArrMode = [1, 2, 3, 1, 2, 3, 24, 5, 6, 4, 2, 2];
var filtArrMode = function () {
    var remDuplArr = new Set(numArrMode);
    var convArr = Array.from(remDuplArr);
    var countObj = {};
    var max = 0;
    var mode;
    var _loop_1 = function (i) {
        var filt1 = numArrMode.filter(function (e) { return e === convArr[i]; });
        countObj[convArr[i]] = filt1.length;
        if (countObj[convArr[i]] > max) {
            max = countObj[convArr[i]];
            mode = max;
        }
    };
    for (var i = 0; i < convArr.length; i++) {
        _loop_1(i);
    }
    console.log(mode);
    // console.log(countObj);
};
filtArrMode();
