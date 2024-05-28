//Write a Function thats count multiple number in an Array
const numArr:number[] = [1,2,3,1,2,3,24,5,6,4,2];
const filtArr = () => {
    let remDuplArr:Set<number> = new Set(numArr);
    let convArr:number[] = Array.from(remDuplArr);
    let countObj:any = {};
   for(let i=0; i<convArr.length; i++){
        let filt1:number[] = numArr.filter((e) => e=== convArr[i]);
        countObj[convArr[i]] = filt1.length;
   }
    console.log(countObj);
};
filtArr();