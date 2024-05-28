//Write a Function thats takes an array as number and return the number thats appear most frequently
const numArrMode:number[] = [1,2,3,1,2,3,24,5,6,4,2,2];
const filtArrMode = () => {
    let remDuplArr:Set<number> = new Set(numArrMode);
    let convArr:number[] = Array.from(remDuplArr);
    let countObj:any = {};
    let max:number = 0;
    let mode;
   for(let i=0; i<convArr.length; i++){
        let filt1:number[] = numArrMode.filter((e) => e=== convArr[i]);
        countObj[convArr[i]] = filt1.length;
        if(countObj[convArr[i]]>max){
            max = countObj[convArr[i]];
            mode = max;
        }
   }
   console.log(mode);
};
filtArrMode();