function LinearSearch(arr,n,x){
    
    for(let i=0; i<n; i++){
        if(arr[i] == x)
            return i;
    }
    return -1;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
let x = 34;
let result = LinearSearch(arr,n,x);
// console.log(result);  //index
(result== -1) ? console.log("The Ele not present") : console.log("The element is present");