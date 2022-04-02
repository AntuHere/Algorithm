// node SimpleSort.js

// Function for Ascending Order
function ascendingArray(arr, n) {
    for (let i = 0; i < n; i++) {
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[i]){
                swap(arr,i,j);
            }
        }
    }
}
//// 3 2 4 5 6
// temp = 3
// i = j // 2
// j = 3 
// 2 3 4 5 6
function descendingArray(arr,n) {
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[j] > arr[i]){
                swap(arr,i,j)
            }
        }
    }
}

// Function for Swapping
function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

//Function for Display Array
function displayArray(arr, n){
    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }
}

let arr= [];

for(let i=0; i<5; i++){
    arr[i] = Math.floor(Math.random() * 100);
}
let n = arr.length;
displayArray(arr,n)

// Ascending Array display
ascendingArray(arr, n);
console.log("Ascending Order");
displayArray(arr,n);

// Descending Array display
descendingArray(arr, n);
console.log("Descending Order");
displayArray(arr,n);




