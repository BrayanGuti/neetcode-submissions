class Solution {
    largestRectangleArea(heights: number[]): number {
        let largestArea = 0
        const stack: number[] = []

        for(let i = 0; i < heights.length; i++) {
            while(stack.length > 0 && heights[i] < heights[stack[stack.length -  1]]){
                const index = stack.pop()
                const h = heights[index]
                const w = stack.length === 0 ? i : i - stack[stack.length -  1] - 1
                largestArea = Math.max(largestArea, (h * w))
            }     
            
            stack.push(i)
        }

        while(stack.length > 0) {
            const index = stack.pop()
            const h = heights[index]
            const w = stack.length === 0 ? heights.length : heights.length - stack[stack.length -  1] - 1
            largestArea = Math.max(largestArea, (h * w))
        }

        return largestArea
    }
}