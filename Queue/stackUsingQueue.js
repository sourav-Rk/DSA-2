class Stack{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    //to add an element
    push(value){
        this.queue1.push(value)
    }

    //to remove an element from the top of the stack
    pop(){
      if(this.isEmpty()){
        return console.log("empty")
      }
      while(this.queue1.length > 1){
        this.queue2.push(this.queue1.shift())
      }
      let popped = this.queue1.pop()
      [this.queue1,this.queue2] = [this.queue2,this.queue1]
    }

    //to display the elements
    display(){
        if(this.isEmpty()){
            return console.log("stack is empty")
        }
        return console.log(this.queue1)
    }
    
    //to check emptyy
    isEmpty(){
        return this.queue1.length === 0
    }

    //get the size
    getSize(){
        return this.queue1.length
    }
}