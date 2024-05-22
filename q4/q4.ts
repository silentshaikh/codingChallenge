// Check Triangle Type

const trainglType = (a:number,b:number,c:number) => {
    if(a===b && b===c){
        console.log("Equilateral Triangle");
    }else if(a===b || b===c || a===c){
        console.log("Isosceles Triangle");
    }else if(a!==b && b!==c && a!==c){
        console.log("Scalene Triangle")
    }
};
trainglType(5,5,5);
trainglType(5,3,3);
trainglType(5,4,3)