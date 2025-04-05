// A stack is a linear data structure that follows LIFO (last in first out principle) principle
//it can be implemented using linked list and arrays

//using array


class Stack {
    constructor(){
        this.items = []
    }

    //to add an element at the top
    push(element){
       this.items.push(element)
    }

    //to remove an element from the top
    pop(){
        if(this.isEmpty()) return "stack is underflow"
        this.items.pop()
    }

    //to look the top element from the top without removing it
    peek(){
        if(this.isEmpty()) return "stack is empty"
        return this.items[this.items.length -1]
    }

    //to get the size of the stack
    size(){
        return this.items.length
    }

    //to check the stack is empty
    isEmpty(){
        return this.items.length === 0
    }

    //to print the stack
    print(){
        console.log(this.items.join(" "))
    }
}

const stack = new Stack()

stack.push(10)
stack.push(9)
stack.push(8)
stack.pop()
stack.peek()
stack.print()
