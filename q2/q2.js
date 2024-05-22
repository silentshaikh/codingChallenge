// Has Tag Generator
var HashTgGeneratr = function (str, hash) {
    var strTrim = str.split(" ");
    console.log(strTrim);
    var capitFirstLettr = strTrim.map(function (e) {
        // return e.charAt(0).toUpperCase()+ e.slice(1).toLowerCase();
        return e.replace(e.charAt(0), e.charAt(0).toUpperCase());
    });
    console.log(capitFirstLettr);
    var arrToStr = capitFirstLettr.join("");
    var conctHash = hash.concat(arrToStr);
    console.log(conctHash);
};
HashTgGeneratr('my name is moiz', "#");
