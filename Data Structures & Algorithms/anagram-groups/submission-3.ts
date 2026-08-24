class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapResult = new Map()

        for(let i = 0; i < strs.length; i++){
            const sortString = strs[i].split('').sort().join('')

            if(mapResult.has(sortString)){
                mapResult.set(sortString, [...mapResult.get(sortString), strs[i]])
            } else{
                mapResult.set(sortString, [ strs[i]])
            }
        }

        const result = []

        for (const [key, value] of mapResult.entries()){
            result.push(value)
        }

        return result
    }
}
