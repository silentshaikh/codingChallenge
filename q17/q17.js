//Convert into camelCase and snake_case
//camelCase
var camelCase = function (str) {
    var strLowerArr1 = str.toLowerCase().split(" ").slice(0, 1);
    var strLowerArr2 = str.toLowerCase().split(" ").slice(1);
    var mapStrLowerArr = strLowerArr2.map(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
    });
    var arrToStr = "".concat(strLowerArr1.join("")).concat(mapStrLowerArr.join(""));
    console.log(arrToStr);
};
camelCase("hello world tOm");
//snakeCase
var snakeCase = function (str) {
    var strLowerArr1 = str.toLowerCase().split(" ").slice(0, 1);
    var strLowerArr2 = str.toLowerCase().split(" ").slice(1);
    var mapStrLowerArr = strLowerArr2.map(function (e) {
        return "_".concat(e.charAt(0).toUpperCase() + e.slice(1));
    });
    var arrToStr = "".concat(strLowerArr1.join("")).concat(mapStrLowerArr.join(""));
    console.log(arrToStr);
};
snakeCase("hello world tOm");
