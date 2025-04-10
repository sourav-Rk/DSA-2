//algorithm
// Start from the first element of the array.

// Compare adjacent elements:

// If the first element is greater than the second, swap them.

// Otherwise, move to the next pair.

// Repeat this process for the entire array.

// The largest element moves to its correct position at the end.

// Reduce the effective size of the array (ignore the last sorted element).

// Repeat until the entire array is sorted.

function bubbleSort(arr){
    let n = arr.length
    let swapped;
    do{
        swapped = false
        for(let i = 0; i < n-1 ; i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true 
            }
        }
        n--
    }while(swapped)
}

const arr = [3,1,8,2,-1,21,34,6]
bubbleSort(arr)
console.log(arr)