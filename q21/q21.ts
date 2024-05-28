//Calculate the Average of an Array
const findAverage = (arr:number[]):void => {
    let reduceArr = arr.reduce((prev,curr) => {
        return prev+curr;
    },0);
    let findAve = reduceArr/arr.length;
    console.log(findAve)
};
findAverage([20,30,40,50,60,70]);