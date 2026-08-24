class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = Array(nums.length)
        let prefixCurrent = 1

        result[0] = 1
        for(let i = 1; i < nums.length; i++){
            prefixCurrent *= nums[i - 1]
            result[i] =  prefixCurrent
        }

        prefixCurrent = 1
        for(let i = nums.length - 2; i >= 0; i--){
            prefixCurrent *= nums[i + 1]
            result[i] *=  prefixCurrent
        }

        return result
    }
}