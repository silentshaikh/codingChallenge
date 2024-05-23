// Function return true if num is the power of two
var isPowrOfTwo = function (num) {
    var output = false;
    if (num >= 0) {
        for (var i = 1; i < num; i++) {
            if (Math.pow(2, i) === num) {
                output = true;
            }
        }
    }
    return output;
};
console.log(isPowrOfTwo(2));
