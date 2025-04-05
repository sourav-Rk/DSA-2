// A queue is a linear data structure that follow first in first out (FIFO) principle
// it can be implemented using both array and linked list

//using array

class Queue {
    constructor(){
        this.queue = []
    }

    //to add an element at the rear of the queue
    enqueue(value){
        this.queue.unshift(value)
    }

    //to remove an element from the front of the queue
    dequeue(){
      if(this.isEmpty()){
        return console.log("queue is empty")
      }
      this.queue.pop()
    }
    
    //to get the element from the rear of the queue
    peek(){
        if(this.isEmpty()){
            return console.log("queue is empty")
        }
        console.log(this.queue[0])
    }

    //to display
    display(){
        console.log(this.queue)
    }

    isEmpty(){
        return this.queue.length === 0
    }
}