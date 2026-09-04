class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const chart = new Set()
        let l = 0
        let res = 0

        for(let r = 0; r < s.length; r++) {
            while(chart.has(s[r])) {
                chart.delete(s[l])
                l++
            }
            chart.add(s[r])
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
