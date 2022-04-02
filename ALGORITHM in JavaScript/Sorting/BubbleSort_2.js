function swap(arr,x,y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr, n){
    let swapped;
   
    for(let i=0; i<n; i++){
        swapped = false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
                swapped = true;
            }
        }
        if(swapped == false){
            break;
        }
    }
}
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length
bubbleSort(arr, n);
arr.forEach(i=>console.log(i))