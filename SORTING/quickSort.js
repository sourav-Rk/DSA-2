// select a pivot element (commonly the last, first, or a random element).

// Partition the array:

// Move elements smaller than pivot to the left.

// Move elements greater than pivot to the right.

// Recursively apply Quick Sort to the left and right subarrays.

// Combine the sorted subarrays to get the final sorted array.

function quickSort(arr){
     if(arr.length<2) return arr
     let left = [] , right = []
     let pivot = arr[arr.length-1]

     for(let i = 0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
     }
     return [...quickSort(left),pivot,...quickSort(right)]
}


const arr = [1,4,2,5,7]
const newArr = quickSort(arr)
console.log(newArr)
