class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operations = new Set(['+', '-', '*', '/'])
        const stack: number[] = []

        for(let i = 0; i < tokens.length; i ++) { 
            if(!operations.has(tokens[i])) {
                stack.push(Number(tokens[i]))
                continue
            }
            
            const last = stack.pop()
            const beforeLast = stack.pop()
            let result: number

            switch(tokens[i]) {
                case('-'):  
                    result = beforeLast - last; 
                    break;
                case('+'):  
                    result = beforeLast + last; 
                    break; 
                case('*'):  
                    result = beforeLast * last; 
                    break;
                case('/'):  
                    result = Math.trunc(beforeLast / last); 
                    break; 
            }

            stack.push(result)
        }

        return stack[0]
    }
}
