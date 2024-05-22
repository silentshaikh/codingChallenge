//Count Occurence of Character

//Using Filter
const countCharac = (str:string,lettr:string) => {
    let strLower = str.toLowerCase().split("");
    let lettrLower = lettr.toLowerCase();
    let findLettr = strLower.filter((e) => {
       return  e === lettrLower;
    });
   let countFIndLettr = findLettr.length;
   console.log(countFIndLettr)
};
countCharac("Important","T");

//Using Reduce
const countCharac2 = (str:string,lettr:string) => {
    let strLower = str.toLowerCase().split("");
    let lettrLower = lettr.toLowerCase();
    let findLettr = strLower.reduce((prev,curr) => {
        if(curr === lettrLower){
            prev++;
        }
        return prev;
    },0)
    console.log(findLettr)
};
countCharac2("Important","T");