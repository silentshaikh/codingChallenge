//Check one string character is it upperCase and LowerCase()
const isupperCase = (str:string):void => {
    if(str.length!==1){
        console.log("Please Enter Only One Character");
    }else{
            if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90){
                console.log("This is a Upper Case")
            }else{
                console.log("This is a not UpperCase")
            }
    }
};
isupperCase("z");

const islowerCase = (str:string):void => {
    if(str.length!==1){
        console.log("Please Enter Only One Character");
    }else{
            if(str.charCodeAt(0)>=97 && str.charCodeAt(0)<=122){
                console.log("This is a Lower Case")
            }else{
                console.log("This is a not Lower Case")
            }
    }
};
islowerCase("Z");