//Array are Equal
//Using every method
let arrOne = [1,2,3];
let arrTwo = [1,2];
let incArr =  arrOne.every((e) => {
    return arrTwo.includes(e);
});
console.log(incArr);

//Using For Loop
((arr1:number[],arr2:number[]) => {
    if(arr1.length !== arr2.length){
        console.log(false);
    }else{
        for(let i=0; i<arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                console.log(false);
            }
        }
        console.log(true);
    }
})(arrOne,arrTwo)