//Write a Function to count vowels in string

const countVowel = (str:string) => {
    let strLower = str.toLowerCase();
    let strToArr = Array.from(strLower);
    let countVowel = strToArr.filter((e) => {
        return e.includes('a') || e.includes('e') || e.includes('i') || e.includes('o') || e.includes('u'); 
    });
    console.log(`The Total Vowel Word in ${str} is ${countVowel.length}`);
}
countVowel("HelloWorld");