class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numbers = new Set(nums)
        const emptySet = new Set()
        let maxLength = 0

        for(let i = 0; i < nums.length; i++) {
            if(emptySet.has(nums[i])){
                continue;    
            }    

            let j = 0
            emptySet.add(nums[i])
            while(numbers.has(nums[i] + 1 + j)) {
                emptySet.add(nums[i] + 1 + j)
                j++
            }

            let x = 0
            while(numbers.has(nums[i] - 1 - x)) {
                emptySet.add(nums[i] - 1 - x)      
                x++
            }

            maxLength = Math.max(maxLength,  (j + x + 1))
        } 

        return maxLength
    }
}
