class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if(prices.length === 1) return 0

        let left = 0
        let right = 1 
        let maxProfit = 0

        while(right < prices.length) {
            if(prices[left] < prices[right]) {
                const profit  = prices[right] - prices[left] 
                maxProfit = Math.max(maxProfit, profit)
            } else {
                left = right
            }
            right++
        }

        return maxProfit
    }
}
