//Array are Equal
//Using every method
var arrOne = [1, 2, 3];
var arrTwo = [1, 2];
var incArr = arrOne.every(function (e) {
    return arrTwo.includes(e);
});
console.log(incArr);
//Using For Loop
(function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log(false);
    }
    else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                console.log(false);
            }
        }
        console.log(true);
    }
})(arrOne, arrTwo);
