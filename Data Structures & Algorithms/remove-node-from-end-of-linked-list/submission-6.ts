/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let len = 0
        let curr = head
        let prev = null

        while (curr !== null) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            len++
        }


        let indexDelete = len - n + 1 
        let newCurr = prev
        let prev2 = null
        let j = len
        let nextNode = null
        let prevNode = null

        while (newCurr !== null) {
        
            if(j === indexDelete + 1) {
                nextNode = newCurr
            }

            if(j === indexDelete - 1) {
                prevNode = newCurr
            }

            const temp = newCurr.next
            newCurr.next = prev2
            prev2 = newCurr
            newCurr = temp

            j--
        }

        if(indexDelete - 1 === 0) return prev2.next

        prevNode.next = nextNode

        return prev2
    }
}
