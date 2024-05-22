// Find the Longest Word in String

//Using Reduce
const fondLongStr1 = (str:string) => {
    let strToArr = str.split(" ");
    let findLongStr = strToArr.reduce((prev,curr) => {
        return  curr.length > prev.length ? curr : prev;
    },"");
    console.log(findLongStr);

};
fondLongStr1("Watch Typescript Videos on Youtube");

//Using ForEach
const fondLongStr2 = (str:string) => {
    let strToArr = str.split(" ");
     let wordLen = ""
    strToArr.forEach((e) => {
        if(e.length > wordLen.length){
            wordLen = e;
        }
    });
    console.log(wordLen)
};
fondLongStr2("Watch Typescript Videos on Youtube");

//Using Filter
const fondLongStr3 = (str:string) => {
    let strToArr = str.split(" ");
     let wordLen = ""
    let fnd = strToArr.filter((e) => {
        if(e.length > wordLen.length){
           return wordLen = e;
        }
    });
    // console.log(fnd)
    fnd.forEach((e) => {
        if(e.length > wordLen.length){
             wordLen = e;
         }
    });
    console.log(wordLen)

};
fondLongStr3("Watch Typescript Videos on Youtube");
 