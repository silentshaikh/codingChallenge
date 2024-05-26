//Find Minimum value in an Array
let arrNum:number[] = [1,2,3,4,5,6,-7,0];
let minArrNum:number = Math.min(...arrNum);
console.log(minArrNum)

//Using Reduce Method
let redMinArrNum:number = arrNum.reduce((prev,curr) => {
    return prev<curr? prev : curr;
});
console.log(redMinArrNum);