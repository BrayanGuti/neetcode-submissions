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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
   addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
    let curr1 = l1
    let curr2 = l2

    let resultHead: ListNode | null = null
    let tail: ListNode | null = null

    let residuo = 0

    while (curr1 || curr2 || residuo) {
        let result = (curr1?.val ?? 0) + (curr2?.val ?? 0) + residuo

        if (result >= 10) {
            residuo = 1
            result = result - 10
        } else {
            residuo = 0
        }

        const newNode = { val: result, next: null }

        if (!resultHead) {
            resultHead = newNode
        } else {
            tail!.next = newNode   // 👈 aquí se hace el link real
        }

        tail = newNode

        curr1 = curr1?.next ?? null
        curr2 = curr2?.next ?? null
    }

    return resultHead as ListNode
}
}
