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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;

        let slow = head
        let fast = head.next

        while(fast && fast.next) {
            slow = slow.next
            fast = fast?.next?.next ?? null
        }

        let secondHalf = slow.next

        slow.next = null

        let prev = null

        while(secondHalf !== null) {
            const temp = secondHalf.next
            secondHalf.next = prev
            prev = secondHalf
            secondHalf = temp
        }

        let first = head
        let second = prev

        while(second) {
            let temp1 = first.next
            let temp2 = second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2
        }

    }
}