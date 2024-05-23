//Write a Function to calculate a sum of square of all element in array
const sumOfSquare = (arr:number[]) => {
    let squareElem = arr.map((e) => e**2);
    let sumOfSquarElem:number = squareElem.reduce((prev,curr) => {
        return prev+curr;
    },0);
    console.log(sumOfSquarElem); 
};
sumOfSquare([1,2,3])