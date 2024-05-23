//Find Average of Array
(() => {
    let arrNum = [10,20,30,40,50,60];
let reducValue = arrNum.reduce((prev,curr) => {
   return prev+curr;
});
let findAve = reducValue/arrNum.length;
console.log(findAve)
})()