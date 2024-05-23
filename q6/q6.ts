// Palindrome Word
const palindromeWord = (str:string):string => {
    let strReplc = str.toLowerCase().replace(/\W/g,"");
    let strArrReverse = strReplc.split("").reverse().join("");
    console.log(strArrReverse)
    return strReplc === strArrReverse ? "Yes" : "No";
};
console.log(palindromeWord('racecar'));
console.log(palindromeWord('hello'));
console.log(palindromeWord('A man, a plan, a canal,panama'));