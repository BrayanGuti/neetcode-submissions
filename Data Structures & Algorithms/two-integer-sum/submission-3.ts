class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numbers = new Map()
        
        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i]

            if(numbers.has(diff)){
                return [numbers.get(diff), i]
            }

            numbers.set(nums[i], i)
        }
    }
}
