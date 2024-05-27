//Write a function to check if a given string start with a specific substring
// const strtStr = (str:string,subStr:string) => {
// let strLower = str.toLowerCase().split(" ");
// console.log(strLower)
// let subStrLower = subStr.toLowerCase();
// let strFind = strLower.reduce((prev,curr) => {
//     return prev===subStrLower ?  true : false;
// })
// console.log(strFind);
// };
// console.log(strtStr("Hello World","Hello")); 

const strtStr = (str:string,subStr:string) => {
    let strLower = str.toLowerCase().replace(/\W*/g,"");
    console.log(strLower)
    let subStrLower = subStr.toLowerCase();
    // return strLower.slice(0,subStrLower.length) === subStrLower;
    return strLower.startsWith(subStrLower)

};
console.log(strtStr("Hello World","Hello")); 