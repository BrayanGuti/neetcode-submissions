class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque: number[] = [];
        const res: number[] = [];

        for (let r = 0; r < nums.length; r++) {
            // maintain decreasing order by value
            while (deque.length && nums[deque[deque.length - 1]] <= nums[r]) {
                deque.pop();
            }
            deque.push(r);

            // remove indices that are out of this window
            if (deque[0] <= r - k) {
                deque.shift();
            }

            // once we've seen at least k elements, record the max
            if (r >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}