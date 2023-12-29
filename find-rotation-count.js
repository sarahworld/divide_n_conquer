function findRotationCount(arr) {
let pivot = findPivot(arr);
    return pivot
}

function findPivot(arr){
    if(arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let start = 0;
    let end = arr.length - 1;

    while (start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] > arr[mid + 1]){
            return mid + 1;
        }
        else if(arr[start] <= arr[mid + 1]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
        

}
export default findRotationCount

console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
console.log(findRotationCount([7, 9, 11, 12, 5]))
console.log(findRotationCount([7, 9, 11, 12, 15]))