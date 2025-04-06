// Divide:

// If the array has one or zero elements, return it (already sorted).

// Otherwise, split the array into two halves (left and right).

// Recursively sort both halves using Merge Sort.

// Merge the two sorted halves into a single sorted array.

function mergeSort(arr){
    if(arr.length < 2) return arr

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left,right){
    const sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr,...left,...right]
}

const arr = [2,5,6,1,8,20,4]
const newArr = mergeSort(arr)
console.log(newArr)