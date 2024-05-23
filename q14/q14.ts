// Function return true if num is the power of two
const isPowrOfTwo = (num:number) => {
    let output = false;
    if(num>=0){
        for(let i=1; i<num; i++){
            if(2**i === num){
                output = true;
            }
        }
    }
    return output;
};
console.log(isPowrOfTwo(2));