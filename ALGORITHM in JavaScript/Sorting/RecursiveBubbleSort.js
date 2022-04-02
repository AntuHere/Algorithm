function swap(arr,x,y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
function recursiveBubbleSort(arr,n){
    if(n == 1){
        return;
    }
    for(let i=0; i<n; i++){
        if(arr[i] > arr[i+1]){ // 2 1 3 4
            swap(arr,i,i+1)
        }
    }

    recursiveBubbleSort(arr,n-1);
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length
recursiveBubbleSort(arr,n-1);
arr.forEach(i => console.log(i))