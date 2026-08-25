class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const strParesd = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "")

        for(let i = 0; i < (Math.floor(strParesd.length / 2) ); i++){
            if(strParesd[i] !== strParesd[strParesd.length - 1 - i]){
                return false
            }
        }

        return true
    }
}
