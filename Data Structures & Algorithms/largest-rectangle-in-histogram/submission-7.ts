class Solution {
    largestRectangleArea(heights: number[]): number {
        let largestArea = 0
        const stack: number[] = [0]

        for(let i = 1; i < heights.length; i++){
            while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
                const index = stack.pop()
                const h = heights[index]
                const w = stack.length === 0 ? i : i - (stack[stack.length - 1] + 1)

                const area = h * w
                if(largestArea < area) {
                    largestArea = area
                }
            }
            stack.push(i)
        } 

        if(stack.length === 0) {
            return largestArea
        }  

        const l =  stack.length
        for(let i = 0; i < l; i++){
            const index = stack.pop()
            const h = heights[index]
            const w = stack.length === 0 ? heights.length : heights.length - (stack[stack.length - 1] + 1)

            const area = h * w
            if(largestArea < area) {
                largestArea = area
            }
        }

        return largestArea
    }
}