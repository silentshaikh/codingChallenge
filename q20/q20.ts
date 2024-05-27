//Write a Function to reverse a string without any Method
let strRevrse:string = "";
const reversStr = (str:string) => {
let strUpdt = str.toLowerCase().replace(/\W*/g,"");
console.log(strUpdt)
for(let i=strUpdt.length-1; i>=0; i--){
    strRevrse += strUpdt[i];
};
console.log(strRevrse)
};
reversStr("Hello World"); 