class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()
        
        for(let i = 0; i <nums.length; i++){
            const valueToSet = (map.get(nums[i]) ?? 0) + 1
            
            map.set(nums[i], valueToSet)
        }

        const entries = Array.from(map.entries())

        entries.sort((a,b) => b[1] - a[1])

        const result = []

        for(let i = 0; i < k; i++){
            result[i] = entries[i][0]
        }
        
        return result
    }
}
