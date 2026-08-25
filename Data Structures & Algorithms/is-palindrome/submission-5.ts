class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0
        let rigth = s.length - 1

        while(left < rigth){
            const leftAsciValue = s[left].toLowerCase().charCodeAt(0)
            const rigthAsciValue = s[rigth].toLowerCase().charCodeAt(0)

            console.log(s[left])
            console.log(leftAsciValue > '0'.charCodeAt(0) &&  leftAsciValue < '9'.charCodeAt(0))
            console.log(leftAsciValue > 'a'.charCodeAt(0) &&  leftAsciValue < 'z'.charCodeAt(0))

            console.log(s[rigth])
            console.log(rigthAsciValue >= '0'.charCodeAt(0) &&  rigthAsciValue <= '9'.charCodeAt(0))
            console.log(rigthAsciValue >= 'a'.charCodeAt(0) &&  rigthAsciValue <= 'z'.charCodeAt(0))

            if(!(
                ( leftAsciValue >= '0'.charCodeAt(0) &&  leftAsciValue <= '9'.charCodeAt(0) ) ||
                ( leftAsciValue >= 'a'.charCodeAt(0) &&  leftAsciValue <= 'z'.charCodeAt(0) )
            )){
                left++
                continue
            }

            if(!(
                ( rigthAsciValue >= '0'.charCodeAt(0) &&  rigthAsciValue <= '9'.charCodeAt(0) ) ||
                ( rigthAsciValue >= 'a'.charCodeAt(0) &&  rigthAsciValue <= 'z'.charCodeAt(0) )
            )){
                rigth--
                continue
            }

            if(leftAsciValue !== rigthAsciValue) return false

            left++
            rigth--
        }

        return true
    }
}
