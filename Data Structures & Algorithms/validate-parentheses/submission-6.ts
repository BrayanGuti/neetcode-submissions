class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const set = new Set(['[', '(', '{'])

        if(s.length % 2 !== 0) return false

        const convert = (str: string) => {
            if(str === '{') return '}'
            if(str === '(') return ')'
            if(str === '[') return ']'
        }

        const stack = []

        for(let i = 0; i < s.length; i++) {
            if(set.has(s[i])) {
                stack.push(convert(s[i]))      
                continue
            }
            
            if(stack.length > 0 && stack[stack.length - 1] === s[i]){
                stack.pop()
                continue
            }

            return false
        }

        if(stack.length > 0) return false


        return true
    }
}
