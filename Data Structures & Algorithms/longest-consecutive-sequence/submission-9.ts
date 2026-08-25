class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)
        let highestSequence = 0

        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i] - 1)){
                continue;
            }


            let currentValue = nums[i]
            let sequenceCounter = 1
            while(set.has(currentValue  + 1)){
                currentValue++
                sequenceCounter++
            }

            highestSequence = Math.max(highestSequence, sequenceCounter)
        }

        return highestSequence
    }
}
