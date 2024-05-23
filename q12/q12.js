//Remove Duplicate Element from the Array
var removeDuplicte = function (arr) {
    var ourSet = new Set(arr);
    var setToArr = Array.from(ourSet);
    console.log(setToArr);
};
removeDuplicte([1, 2, 3, 4, 5, 3, 4, 2, 6, 7]);
