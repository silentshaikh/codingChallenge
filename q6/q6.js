// Palindrome Word
var palindromeWord = function (str) {
    var strReplc = str.toLowerCase().replace(/\W/g, "");
    var strArrReverse = strReplc.split("").reverse().join("");
    console.log(strArrReverse);
    return strReplc === strArrReverse ? "Yes" : "No";
};
console.log(palindromeWord('racecar'));
console.log(palindromeWord('hello'));
console.log(palindromeWord('A man, a plan, a canal,panama'));
