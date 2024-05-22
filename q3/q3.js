//Count Occurence of Character
//Using Filter
var countCharac = function (str, lettr) {
    var strLower = str.toLowerCase().split("");
    var lettrLower = lettr.toLowerCase();
    var findLettr = strLower.filter(function (e) {
        return e === lettrLower;
    });
    var countFIndLettr = findLettr.length;
    console.log(countFIndLettr);
};
countCharac("Important", "T");
//Using Reduce
var countCharac2 = function (str, lettr) {
    var strLower = str.toLowerCase().split("");
    var lettrLower = lettr.toLowerCase();
    var findLettr = strLower.reduce(function (prev, curr) {
        if (curr === lettrLower) {
            prev++;
        }
        return prev;
    }, 0);
    console.log(findLettr);
};
countCharac2("Important", "T");
