function expressionEvaluation(expr){
    const tokens = expr.split(" ")
    const stack = []

    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }else{
            let a = stack.pop()
            let b = stack.pop()

            switch(token){
                case "+" : 
                     stack.push(a+b)
                     break
                case "-":
                    stack.push(a-b)
                    break
                case "*" :
                    stack.push(a*b)
                    break
                case "/" :
                    stack.push(a/b)
                    break;            
            }
        }
    }
    return stack.pop()
}

const expr = "2 3 4 * +"; // 2 + (3 * 4) = 14
console.log(expressionEvaluation(expr))