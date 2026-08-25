class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0 ) return false

        const stack = []
        const isPushable = (str: string) => {
            if(str === '[') return true
            if(str === '(') return true
            if(str === '{') return true
        }

        const getOtherPart = (str: string) => {
            if(str === ']') return '['
            if(str === ')') return '('
            if(str === '}') return '{'
        }

        for(let i = 0; i < s.length; i++) {
            if(isPushable(s[i])) {
                stack.push(s[i])
                continue
            }

            if(getOtherPart(s[i]) === stack[stack.length -1]){
                stack.pop()
                continue
            }
            return false
        }

        if(stack.length !== 0) return false

        return true
    }
}
