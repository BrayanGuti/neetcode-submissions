class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sorted = Array.from(new Set(nums)).sort((a,b) => a - b)

        if(sorted.length <= 1 ){
            return sorted.length
        }


        let i = 1
        let higherSequence = 0

        while(i < sorted.length){
            let sequenceCounter = 1
            while(sorted[i - 1] === sorted[i] - 1) {
                sequenceCounter++
                i++
            }
            i++
    
            if(sequenceCounter > higherSequence){
                higherSequence = sequenceCounter
            }

        }

        return higherSequence
    }
}
