// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const nodeMap = new Map()

        const deepCopyMemoziation = (node: Node) => {
            let curr = node
            let result = null
            let i = 0
            while (curr !== null) {
                const newNode = nodeMap.get(curr)
                newNode.next = nodeMap.get(curr.next) ?? null
                newNode.random = nodeMap.get(curr.random) ?? null

                curr = curr.next

                if (i === 0) {
                    result = newNode
                }

                i++
            }
            
            return result
        }

        let curr = head

        while (curr !== null) {
            const newNode = {
                val: curr.val,
                next: null,
                random: null
            }

            nodeMap.set(curr, newNode)

            curr = curr.next
        }

        return deepCopyMemoziation(head)
    }
}
