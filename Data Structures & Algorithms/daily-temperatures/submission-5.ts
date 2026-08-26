class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack: number[][] = []
        const result: number[] = Array.from({ length: temperatures.length }, () => 0)

        for(let i = 0; i < temperatures.length; i++) {
            if( stack[stack.length - 1] && temperatures[i] > stack[stack.length - 1][0]){
                while(true){
                    const [temp, index] = stack.pop()
                    if(temperatures[i] > temp){
                        result[index] = (i - index)
                        if(stack.length === 0){
                            break
                        }
                    } else {
                        stack.push([temp, index])
                        break
                    }
                }
            }

            stack.push([temperatures[i], i])
        }

        return result
    }
}
