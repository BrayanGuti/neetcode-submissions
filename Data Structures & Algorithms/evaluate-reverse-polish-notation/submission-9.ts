class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operation = new Set(['+','*','/','-'])
        const result: number[] = []

        for(const token of tokens){
            if(operation.has(token)){
                const a = result.pop()
                const b = result.pop()

                let num: number; 

                switch(token){
                    case "+":
                        num = b + a
                        break;
                    case "-":
                        num = b - a
                        break;
                    case "*":
                        num = b * a
                        break;
                    case "/":
                        num = Math.trunc(b / a)
                        break;
                }

                result.push(num)
                continue;
            }

            result.push(Number(token))
        }

        return result[0]
    }
}
