class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operations = new Set(["+" , "-", "*", "/"])
        const stack: number[] = []

        for(const element of tokens) {
            if(operations.has(element)){
                const a = stack.pop()
                const b = stack.pop()
                let result: number 
                switch(element){
                    case "+": result = b + a; break;
                    case "*": result = b * a; break;
                    case "-": result = b - a; break;
                    case "/": result = Math.trunc(b / a); break;
                }
                stack.push(result)
            } else {
                stack.push(Number(element))
            }
        }

        return stack[0]
    }
}
