//Convert into camelCase and snake_case

//camelCase
const camelCase = (str:string):void => {
    let strLowerArr1 = str.toLowerCase().split(" ").slice(0,1);
    let strLowerArr2 = str.toLowerCase().split(" ").slice(1);
    let mapStrLowerArr = strLowerArr2.map((e) => {
        return e.charAt(0).toUpperCase()+e.slice(1);
    });
    let arrToStr = `${strLowerArr1.join("")}${mapStrLowerArr.join("")}`;
    console.log(arrToStr);
};
camelCase("hello world tOm");

//snakeCase
const snakeCase = (str:string):void => {
    let strLowerArr1 = str.toLowerCase().split(" ").slice(0,1);
    let strLowerArr2 = str.toLowerCase().split(" ").slice(1);
    let mapStrLowerArr = strLowerArr2.map((e) => {
        return `_${e.charAt(0).toUpperCase()+e.slice(1)}`;
    });
    let arrToStr = `${strLowerArr1.join("")}${mapStrLowerArr.join("")}`;
    console.log(arrToStr);
};
snakeCase("hello world tOm");