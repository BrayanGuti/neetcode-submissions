class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length < t.length) return "";

        const charMap = new Map<string, number>();

        for (const char of t) {
            charMap.set(char, (charMap.get(char) ?? 0) + 1);
        }

        let count = t.length;
        let shortestString = Infinity;
        let res = [-1, -1];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            if (charMap.has(s[r])) {
                if (charMap.get(s[r])! > 0) count--;
                charMap.set(s[r], charMap.get(s[r])! - 1);
            }

            while (count === 0) {
                if (shortestString > (r - l + 1)) {
                    shortestString = r - l + 1;
                    res[0] = r;
                    res[1] = l;
                }

                if (charMap.has(s[l])) {
                    charMap.set(s[l], charMap.get(s[l])! + 1);
                    if (charMap.get(s[l])! > 0) {
                        count++;
                    }
                }
                l++;
            }
        }

        if (res[0] === -1) return "";

        return s.slice(res[1], res[0] + 1);
    }
}