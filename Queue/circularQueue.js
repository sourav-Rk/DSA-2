class CircularQueue {
    constructor(size){
        this.size  = size
        this.queue = new Array(size)
        this.front = -1
        this.rear  = -1
    }
    
    //to check if the queue is full
    isFull(){
        return (this.rear + 1) % this.size === this.front
    }

    //to check the queue is empty
    isEmpty(){
        return this.front === -1
    }

    //to add an element at the queue
    enqueue(value){
        if(this.isFull()){
            console.log("queue is full")
            return
        }
        if(this.isEmpty()){
            this.front = 0
            this.rear = 0
        }else{
            this.rear = (this.rear +1) % this.size
        }
        this.queue[this.rear] = value
    }

    //to remove an element from the queue
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        let removed = this.queue[this.front]

        if(this.front === this.rear){
            this.front = -1
            this.rear = -1
        }else{
            this.front = (this.front + 1) % this.size
        }
        return removed
    }

    //to display the elements
    display(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        let i = this.front
        let result = []

        while(true){
            result.push(this.queue[i])
            if(i === this.rear) break
            i = (i + 1) % this.size
        }
        console.log(this.queue.join(" "))
    }

}

const cq = new CircularQueue(5)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)
cq.enqueue(5)
cq.display()
cq.dequeue()
cq.dequeue()

cq.enqueue(6)
cq.enqueue(7)
cq.display()