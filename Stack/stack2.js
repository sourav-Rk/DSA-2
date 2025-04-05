//using Linked list

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.head = null
        this.size = 0
    }

    //to add an element at the top of the stack
    push(value){
      const node = new Node(value)
      if(!this.isEmpty()) node.next = this.head
      this.head = node
      this.size++
    }

    //to remove an element from the top of the stack
    pop(){
        if(this.isEmpty()){
            return console.log("stack underflow")
        }
        this.head = this.head.value
        this.size--
    }

    //to get the top element
    peek(){
        if(this.isEmpty()){
            return console.log("")
        }
    }


    //to check the stack is empty
    isEmpty(){
        return this.size === 0
    }

    //to get the size of the stack
    getSize(){
        return this.size
    }

    //to print the elements in the stack
    print(){
        if(this.isEmpty()){
            return console.log("stack is empty")
        }
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues+=`${curr.value} `
           curr =   curr.next
        }
        console.log(listValues)
    }
}