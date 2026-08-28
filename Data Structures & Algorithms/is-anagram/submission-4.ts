class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        
        const anamagranData: number[] = Array(26).fill(0)
    

        for(let i = 0; i < s.length; i ++){
            anamagranData[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
            anamagranData[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
        }

        return anamagranData.every((e) => e === 0) 
    }
}
