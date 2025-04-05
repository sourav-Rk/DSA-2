//Queue using linked list

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    //to add element from the rear
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    //to add an element at the rear of the queue
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    //to remove an element from the front of the stack
    dequeue(){
        if(this.isEmpty()){
            return console.log("queue is empty")
        }
        this.head = this.head.next
        this.size--
    }

    //to get the element from the rear of the queue 
    peek(){
        if(this.isEmpty()){
            return console.log("queue is empty")
        }
        return console.log(this.tail.value)
    }

    //to print the elements
    print(){
        if(this.isEmpty()){
            return console.log("queue is empty")
        }
        let curr = this.head
        let queueValues = ""
        while(curr){
            queueValues+=`${curr.value} `
            curr = curr.next
        }
        console.log(queueValues)
    }
   
    //to check the queue is underflow
    isEmpty(){
        return this.size === 0
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(9)
queue.enqueue(8)
queue.enqueue(7)
queue.print()
queue.peek()