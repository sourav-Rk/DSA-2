class Palindrome {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }
    
    isEmpty(){
        return this.stack.length === 0
    }

}

function palidromeCheck(string) {
    const palidrome = new Palindrome()
    let reversed = ""

    for(let i of string){
        palidrome.push(i)
    }

    for(let i =0; i<string.length; i++){
        reversed+=palidrome.pop()
    }

    return reversed === string
}

console.log(palidromeCheck("malayalam"))
console.log(palidromeCheck("sourav"))