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
        const nodeMap = new Map()
        let curr = head
        
        let i = 0
        
        while (curr !== null) {
            nodeMap.set(i, curr)
            curr = curr.next
            i++
        }

        if (i - n === 0) {
            return head.next
        }

        if(n === 1) {
            const prevToLastOne = nodeMap.get(i - 2)
            prevToLastOne.next = null
            return head
        }

        const prevToDelete = nodeMap.get(i - n - 1)
        const newPointer = nodeMap.get(i - n + 1)

        prevToDelete.next = newPointer

        return head
    }
}
