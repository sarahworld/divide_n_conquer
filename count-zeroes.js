function countZeroes(input) {
    let firstZero = firstfind(input)
    if (firstZero === -1) return 0;

    return input.length - firstZero;
}

function firstfind(input, low=0, high=input.length -1) {
    if(high >= low){
        let mid = low + Math.floor((high - low)/2)
        if((mid === 0 || input[mid - 1] === 1) && input[mid] === 0 ){
            return mid;
        }
        else if(input[mid] === 1){
            return firstfind(input, low = mid + 1, high)
        }
        else {
            return firstfind(input, low, high = mid -1 )
        }
        
    }
    return -1
}


export default countZeroes




console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0

// module.exports = countZeroes
