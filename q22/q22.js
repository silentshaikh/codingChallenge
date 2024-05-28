var findMedian = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    var mid = (arr.length) / 2;
    if (arr.length % 2 === 0) {
        console.log((arr[mid] + arr[mid - 1]) / 2);
    }
    else {
        console.log(arr[mid]);
    }
};
findMedian([1, 3, 5, 7, 9, 11]);
