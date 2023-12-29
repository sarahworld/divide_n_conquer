function sortedFrequency(arr, num) {
    let firstval = firstFind(arr, num)
    if(firstval == -1) return firstval;

    let lastval = lastFind(arr, num)
    return lastval - firstval + 1;
}

function firstFind(arr,num,low=0,high=arr.length - 1){
    if(high >= low){
        let mid = low + Math.floor((high - low)/2)
        if(mid === 0 || num > arr[mid - 1] && arr[mid] === num){
            return mid
        }
        else if (num < arr[mid]){
            return firstFind(arr,num,low=0,high=mid-1)
        }
        else{
            return firstFind(arr,num,low=mid+1, high)
        }
    }
    return -1
}

function lastFind(arr,num,low=0,high=arr.length - 1){
    if(high >= low){
        let mid = low + Math.floor((high - low)/2)
        if(mid === arr.length - 1 || num < arr[mid + 1] && arr[mid] === num){
            return mid
        }
        else if (num < arr[mid]){
            return lastFind(arr,num,low=0,high=mid-1)
        }
        else{
            return lastFind(arr,num,low=mid+1, high)
        }
    }
    return -1
}

export default sortedFrequency;

console.log(sortedFrequency([1,1,2,2,2,2,3],2))