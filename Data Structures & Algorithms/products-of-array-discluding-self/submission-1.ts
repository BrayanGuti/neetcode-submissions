class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = []
        let amountOfZeros = 0;
        let total = 1;


        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0){
                amountOfZeros++

                if(amountOfZeros === 2){
                    return nums.fill(0)
                }
                continue
            }

            total *= nums[i]
        }

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== 0 && amountOfZeros === 1){
                result.push(0)
            } else if(nums[i] !== 0) {
                result.push(total/nums[i])
            } else {
                result.push(total)
            }
        }

        return result
    }
}