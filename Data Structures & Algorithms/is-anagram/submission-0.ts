class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sMap = new Map()
        const tMap = new Map()

        for(const char of s){
            if(sMap.has(char)){
               sMap.set(char, sMap.get(char) + 1)
            } else{
               sMap.set(char, 1)
            }
        }

        for(const char of t){
            if(tMap.has(char)){
               tMap.set(char, tMap.get(char) + 1)
            } else{
               tMap.set(char, 1)
            }
        }

        if(!(sMap.size === tMap.size)){
            return false
        }

        const sEntries = sMap.entries()

        for(let sValue of sEntries){
            if(tMap.get(sValue[0])  !== sValue[1]){
                return false
            }
        }


        return true
    }
}
