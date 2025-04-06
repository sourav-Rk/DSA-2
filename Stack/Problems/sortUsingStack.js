function sortStack(stack){
    let tempStack = []

    while(stack.length > 0){
        let temp = stack.pop()

        while(tempStack.length > 0 && tempStack[tempStack.length -1] > temp){
            stack.push(tempStack.pop())
        }

        tempStack.push(temp)
    }
    return tempStack
}

const arr = [2,5,1,6,3,7,3]
const newArr = sortStack(arr)
console.log(newArr)