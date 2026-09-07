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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if(!head || !head.next) return false

        const seenNodes = new Set()
        let curr = head

        while(curr) {
            if(seenNodes.has(curr)) return true
            seenNodes.add(curr)
            curr = curr?.next ?? null
        }

        return false
    }
}
