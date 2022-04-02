// Input  : paper true soap floppy flower
// Output : floppy, flower, paper, soap, true
function swap(arr,x,y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}
function sort(arr,n){
    var min_indx;
    for(let i=0; i<n; i++){
        min_indx = i;
        for(let j=i+1; j<n; j++){ // 2 1
            if(arr[j]<arr[min_indx]){
                min_indx = j;
            }
        }
        swap(arr,min_indx,i)
    }
}
// let arr = [ 'paper', 'true', 'soap', 'floppy', 'flower' ];
// let arr =  [ "GeeksforGeeks",
// "Practice.GeeksforGeeks",
// "GeeksQuiz" ];
let arr = ['b','a','e','k','c']
let n = arr.length;

sort(arr,n)
for(let i=0; i<n; i++){
    console.log(arr[i]);
}
