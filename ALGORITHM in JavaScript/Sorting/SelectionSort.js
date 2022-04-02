// arr = [12,1,4,57,90]
// find minimum ele from arr[0 to 4];
// min = 1 & put in into the first;
// arr = [1,12,4,57,90]
// same things again

// swap function
let swap = (arr,x,y)=>{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

// Selection Sort Func
function SelectionSort(arr,n) { // 12,1,4,57,90
    var min_index;
    for (let i = 0; i < n-1; i++) { 
        min_index = i;
        for(let j=i+1; j<n; j++){ 
            if(arr[j]<arr[min_index]){
                min_index = j
            }
        }
        swap(arr,min_index,i);
    }
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
SelectionSort(arr, n);
console.log("Ascending Order");
displayArray(arr,n);