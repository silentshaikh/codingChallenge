// Find a Factorial

//Using Recursive Function
let fact = 5;
const findFactorial = (fact:number):any => {
    if(fact<=5 && fact>0){
      return  fact*findFactorial(fact-1);
    }else{
        return 1;
    }
};
console.log(findFactorial(fact))

//Using For Loop
let factLoop = 1;
for(let i=5; i>=1; i--){
    factLoop *= i;
};
console.log(factLoop);