class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class CircularQueue {
    constructor(){
        this.front = null
        this.rear = null
    }

    //to add an element at the rear
    enqueue(value){
        const node = new Node(value)

        if(this.front === null){
            this.front = node
            this.rear  = node
            node.next = this.front
        }else{
            this.rear.next = node
            this.rear = node
            node.next = this.front
        }
    }

    //to remove an element at the front
    dequeue(){
        if(this.front === null){
            console.log("queue is empty")
            return 
        }
        
        let removed

        if(this.front === this.rear){
            removed = this.front.value
            this.front = null
            this.rear = null
        }else{
            removed = this.front.value
            this.front = this.front.next
            this.rear.next = this.front
        }
        return removed
    }

    //to display the elements
    display(){
        if(this.front === null){
            console.log("queue is empty")
            return
        }
        let curr = this.front
        const result = []

        do{
            result.push(curr.value)
            curr = curr.next
        }while(curr !== this.front)

            console.log("Queue :",result.join(" "))
    }
}