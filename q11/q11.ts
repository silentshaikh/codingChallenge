//Write a Function thats takes a number as input and return the sum of tis digits
const sumOfDigit = (num:number) => {
    let numToArr = Array.from(String(num),Number);
    console.log(numToArr);
    let arrReduce = numToArr.reduce((prev,curr) => {
        return prev+curr;
    })
    console.log(arrReduce)
};
sumOfDigit(1234)

//Without Convert in String
const sumOfDigit2 = (num:number) => {
    let numToArr:number[] = [];
    while(num>0){
        //Gets the last digit of the number
        let digits = num%10;
        numToArr.unshift(digits);
        //Remove the last digit of the number
        num = Math.floor(num/10);

    }
    console.log(numToArr)
    let sumOfArr = numToArr.reduce((prev,curr) => {
        return prev+curr;
    },0);
    console.log(sumOfArr)
};
sumOfDigit2(123456)