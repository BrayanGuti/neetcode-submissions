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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(!list1){
            return list2
        }

        if(!list2){
            return list1
        }
        
        let currList1 = list1
        let currList2 = list2

        


        const dummy = {
            val: null,
            next: null
        }

        let curr = dummy


        while(true) {
            
            if(!currList1) {
                curr.next = currList2
                break
            }

            if(!currList2) {
                curr.next = currList1
                break
            }


            while(currList2 && currList2.val <= currList1.val) {
                curr.next = currList2
                curr = currList2
                currList2 = currList2?.next ?? null
            }

            curr.next = currList1
            curr = currList1
            currList1 = currList1?.next ?? null
        }

        return dummy.next
    }
}
