class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[][] = []
        const result: number[] = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length > 0 &&
                temperatures[i] > stack[stack.length - 1][0]
            ) {
                const [, index] = stack.pop()!
                result[index] = i - index
            }

            stack.push([temperatures[i], i])
        }

        return result
    }
}