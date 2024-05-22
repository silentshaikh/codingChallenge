// Find the Longest Word in String
//Using Reduce
var fondLongStr1 = function (str) {
    var strToArr = str.split(" ");
    var findLongStr = strToArr.reduce(function (prev, curr) {
        return curr.length > prev.length ? curr : prev;
    }, "");
    console.log(findLongStr);
};
fondLongStr1("Watch Typescript Videos on Youtube");
//Using ForEach
var fondLongStr2 = function (str) {
    var strToArr = str.split(" ");
    var wordLen = "";
    strToArr.forEach(function (e) {
        if (e.length > wordLen.length) {
            wordLen = e;
        }
    });
    console.log(wordLen);
};
fondLongStr2("Watch Typescript Videos on Youtube");
//Using Filter
var fondLongStr3 = function (str) {
    var strToArr = str.split(" ");
    var wordLen = "";
    var fnd = strToArr.filter(function (e) {
        if (e.length > wordLen.length) {
            return wordLen = e;
        }
    });
    // console.log(fnd)
    fnd.forEach(function (e) {
        if (e.length > wordLen.length) {
            wordLen = e;
        }
    });
    console.log(wordLen);
};
fondLongStr3("Watch Typescript Videos on Youtube");
