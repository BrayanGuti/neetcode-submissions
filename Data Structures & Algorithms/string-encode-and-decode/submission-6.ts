class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length === 0){
            return ""
        }

        let encodedString = ""

        for(let i = 0; i < strs.length; i++) {
            encodedString += 'é' + strs[i] 
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str === "") return []

        return str.split('é').splice(1)
    }
}
