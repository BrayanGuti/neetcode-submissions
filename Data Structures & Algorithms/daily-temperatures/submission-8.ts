class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[] = []
        const result: number[] = Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length; i++){

            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const stackIndex = stack.pop()
                result[stackIndex] = i - stackIndex
            }

            stack.push(i)
    
        }

        return result
    }
}