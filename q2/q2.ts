// Has Tag Generator
const HashTgGeneratr = (str:string,hash:string) => {
    let strTrim = str.split(" ");
    console.log(strTrim)
    let capitFirstLettr = strTrim.map((e) => {
        // return e.charAt(0).toUpperCase()+ e.slice(1).toLowerCase();
        return e.replace(e.charAt(0),e.charAt(0).toUpperCase());
    });
    console.log(capitFirstLettr)
    let arrToStr = capitFirstLettr.join("");
    let conctHash = hash.concat(arrToStr);
    console.log(conctHash)
};
HashTgGeneratr('my name is moiz',"#");