class Parenthesis {
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

function checkBalancedParanthesis(string){
    const paranthesis = new Parenthesis()
    let pairs = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let i = 0; i<string.length; i++){
        if(["(","{","["].includes(string[i])){
            paranthesis.push(string[i])
        }
        else{
            if(paranthesis.isEmpty()) return false
            else{
                if(pairs[string[i]]!== paranthesis.pop){
                    return false
                }
            }
        }
    }
    return paranthesis.isEmpty()
}

const str = "({[]})"
const str1 = "{{}]"

console.log(checkBalancedParanthesis(str))
console.log(checkBalancedParanthesis(str1))