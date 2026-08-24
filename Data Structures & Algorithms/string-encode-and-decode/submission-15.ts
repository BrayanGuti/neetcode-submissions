class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length === 0) return ""

        const sizes: number[] = []

        for(const str of strs){
            sizes.push(str.length)
        }

        return sizes.join(",") + '#' + strs.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str === "") return []
        
        const sizes = []
        const result = []
        let current_i = 0

        while(str[current_i] !== '#'){
            let size = ''
            
            while(str[current_i] !== ',' && str[current_i] !== '#'){
                size += str[current_i]
                current_i++
            }
            sizes.push(Number(size))
            
            if(str[current_i] === ',') current_i++
        }

        current_i++


        for (let i = 0; i < sizes.length; i++) {
            result.push(str.substring(current_i, current_i + sizes[i]))
            current_i += sizes[i]
        }

        return result
    }
}
