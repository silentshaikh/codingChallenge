//Find Median of the Array

//Tips💡
//Sort The Number of Array
//If the Array length is odd number ,return the median like middle of element in the Array
//If the Array length is even number ,return the median with find average of the number in an Array

const findMedian = (arr:number[]) => {
    arr.sort((a,b) => a-b);
    let mid = (arr.length)/2;
    if(arr.length%2===0){
        console.log((arr[mid]+arr[mid-1])/2);
    }else{
        console.log(arr[mid])
    }
};
findMedian([1,3,5,7,9,11])