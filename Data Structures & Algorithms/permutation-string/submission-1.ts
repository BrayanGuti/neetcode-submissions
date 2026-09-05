class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false

        const strMetadate = new Array(26).fill(0)
        const indexs = new Set()

        for(const char of s1) {
            strMetadate[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
            indexs.add(char)
        }

        let l = 0

        for(let r = 0; r < s2.length; r++) {
            if(indexs.has(s2[r])){
                strMetadate[s2[r].charCodeAt(0) - 'a'.charCodeAt(0)]--
            }
        
            while(r - l + 1 > s1.length) {
                if(indexs.has(s2[l])){
                    strMetadate[s2[l].charCodeAt(0) - 'a'.charCodeAt(0)]++
                }
                l++
            }

            if(strMetadate.every((a) => a === 0)){
                return true
            }
        }

        return false
    }
}
