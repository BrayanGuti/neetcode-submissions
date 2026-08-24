class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numbers = new Map()
        
        for(let i = 0; i < nums.length; i++){
            const difference = target - nums[i]

            if(numbers.has(difference)){
                return[numbers.get(difference), i]
            }

            numbers.set(nums[i], i)
        }
    }
}
