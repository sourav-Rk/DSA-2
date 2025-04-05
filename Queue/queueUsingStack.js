

class QueueUsingStack {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    //to add an element
    enqueue(value){
        this.stack1.push(value)
    }

    //to remove an element from the front
    dequeue(){
        if(this.stack2.length === 0){
            if(this.stack1.length ===0){
                return console.log("stack is empty")
            }

            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    //to display the elements
    display(){
        console.log([...this.stack2.reverse(),...this.stack1])
    }
}

const queue = new QueueUsingStack()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.display()
queue.dequeue()
queue.display()