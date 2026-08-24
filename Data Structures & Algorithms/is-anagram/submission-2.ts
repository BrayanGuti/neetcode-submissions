class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const newArray = new Array(26).fill(0)

        for(let i = 0; i < s.length; i++){
            const sIndex = s.charCodeAt(i) - 'a'.charCodeAt(0)
            const tIndex = t.charCodeAt(i) - 'a'.charCodeAt(0)


            newArray[sIndex] += 1
            newArray[tIndex] -= 1
        }


        for(let i = 0; i < newArray.length; i++){
            if(newArray[i] !== 0){
                return false
            }
        }

        return true
    }
}
