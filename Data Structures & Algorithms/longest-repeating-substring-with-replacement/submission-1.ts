class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map()
        let res = 0

        let l = 0
        let maxF = 0

        for(let r = 0; r < s.length; r++) {
            const newValue = (count.get(s[r]) ?? 0)  + 1
            count.set(s[r], newValue)

            maxF = Math.max(newValue, maxF)
            
            while(r - l + 1 - maxF > k) {
                count.set(s[l], count.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }

        return res
    }
}