//Find the Factorial of 5 Using Recursive Fucntion
const factOfFive = (num:number):number => {
    if(num<1){
        return 1;
    }else{
        return num*factOfFive(num-1);
    }
};
console.log(factOfFive(5))