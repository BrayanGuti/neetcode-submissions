class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque: number[] = [];
        const res: number[] = [];

        for (let r = 0; r < nums.length; r++) {
            while (deque.length && nums[deque[deque.length - 1]] <= nums[r]) {
                deque.pop();
            }
            deque.push(r);

            if (deque[0] <= r - k) {
                deque.shift();
            }

            if (r >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}