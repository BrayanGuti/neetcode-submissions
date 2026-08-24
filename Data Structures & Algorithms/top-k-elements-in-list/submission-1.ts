class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()
        const array: Array<Array<number>> = Array.from({ length: nums.length }, () => [])
        const result = []
        
        // O(n) complexity 
        for(let i = 0; i <nums.length; i++){  
            const valueToSet = (map.get(nums[i]) ?? 0) + 1
            
            map.set(nums[i], valueToSet)
        }

        // O(m) complexity where m is the amount of distinct values
        // in the array nums so m < n always
        for(const [key, value] of map.entries()) {
            array[value - 1].push(key)
        }


        for(let i = array.length - 1; i >= 0; i--){                
            if(array[i].length === 0) {
                continue
            }
            

            for(let j = 0; j < array[i].length; j++){  
                result.push(array[i][j])

                if(result.length === k){
                    return result
                }
            }               

        }
    }
}
