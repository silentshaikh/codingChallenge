//Remove Duplicate Element from the Array
const removeDuplicte = (arr:number[]) => {
    let ourSet:Set<number> = new Set(arr);
    let setToArr:number[] = Array.from(ourSet);
    console.log(setToArr)
};
removeDuplicte([1,2,3,4,5,3,4,2,6,7]);