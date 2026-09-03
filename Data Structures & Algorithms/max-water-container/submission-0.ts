class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let right  = heights.length  - 1
        let left  = 0

        let largestArea = 0

        while(right > left) {
            const width = right - left
            const height = Math.min(heights[right], heights[left])  
            const area = width * height

            largestArea = Math.max(largestArea, area)

            if(heights[right] > heights[left]){
                left++
            } else{
                right--
            }

        }

        return largestArea
    }
}
