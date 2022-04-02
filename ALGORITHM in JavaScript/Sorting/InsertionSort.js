//  2 3 4 5 6 8 1

function insertSort(arr,n) {
    for(let i=1; i<n; i++){
        let temp = arr[i];
        let j = i-1;
         while(j >=0 && arr[j] > temp){
             arr[j+1] = arr[j];
             j--;
         }
         arr[j+1] = temp;
    }
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length
insertSort(arr,n) 
arr.forEach(i => console.log(i))