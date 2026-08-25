class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)
        const array = Array.from(set)

        if(array.length <= 1 ){
            return array.length
        }


        let i = 0
        let higherSequence = 0

        while(i < array.length){
            const isStartOfSequence = (num: number) => !set.has(num - 1)
            let currentNumber = array[i]

            if(!isStartOfSequence(currentNumber)){
                i++
                continue
            }

            let sequenceCounter = 1
            while(set.has(currentNumber + 1)) {
                currentNumber++
                sequenceCounter++
            }
    
            if(sequenceCounter > higherSequence){
                higherSequence = sequenceCounter
            }

            i++
        }

        return higherSequence
    }
}
