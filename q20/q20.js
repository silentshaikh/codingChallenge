//Write a Function to reverse a string without any Method
var strRevrse = "";
var reversStr = function (str) {
    var strUpdt = str.toLowerCase().replace(/\W*/g, "");
    console.log(strUpdt);
    for (var i = strUpdt.length - 1; i >= 0; i--) {
        strRevrse += strUpdt[i];
    }
    ;
    console.log(strRevrse);
};
reversStr("Hello World");
