//Write a Function to count vowels in string
var countVowel = function (str) {
    var strLower = str.toLowerCase();
    var strToArr = Array.from(strLower);
    var countVowel = strToArr.filter(function (e) {
        return e.includes('a') || e.includes('e') || e.includes('i') || e.includes('o') || e.includes('u');
    });
    console.log("The Total Vowel Word in ".concat(str, " is ").concat(countVowel.length));
};
countVowel("HelloWorld");
