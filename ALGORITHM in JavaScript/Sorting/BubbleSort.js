// 2 1 3 4 5

function swap(arr,x,y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr,n) {
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1])
                swap(arr,j,j+1)
        }
    }
}


let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
bubbleSort(arr, n);
for(let i=0; i<n; i++){
    console.log(arr[i]);
}
