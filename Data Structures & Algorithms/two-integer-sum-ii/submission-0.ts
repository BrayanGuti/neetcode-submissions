class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let right = numbers.length -1
        let left = 0

        while(right > left){
            const sum = numbers[right] + numbers[left]

            if(sum === target) return [left + 1 , right + 1]

            if(sum > target){
                right--
                continue
            }

            left++
        }
    }
}
