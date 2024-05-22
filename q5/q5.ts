// Sort an Array without Sort Method

const sortArr = (arr:number[]) => {
    for(let i=0; i<arr.length; i++){
        //Becuase the last element is already big than other
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
            arr[j] = arr[j+1]; // a ki jagah b
            arr[j+1] = temp;  // b ki jagah a
            }
        
        }
    }
    console.log(arr);
};
sortArr([5,4,3,2,10]);