class LRUCache {
    private head_pointer = null;
    private tail_pointer = null;
    private max_capacity;
    private mapCache = new Map()

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.max_capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.mapCache.get(key)
        
        if(!node) return -1

        if(this.mapCache.size === 1) {
            return this.tail_pointer.val
        }

        if(node === this.tail_pointer) {
            return this.tail_pointer.val
        }

        const nextNode = node.next
        const prevNode = node.prev
        
        if(prevNode) {
            prevNode.next = nextNode
        }

        if(nextNode) {
            nextNode.prev = prevNode
        }
        
        if(node === this.head_pointer) {
            this.head_pointer = node.next
        }

        const prevTail = this.tail_pointer
        
        prevTail.next = node
        node.prev = prevTail
        node.next = null
        
        this.tail_pointer = node
        
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const existing = this.mapCache.get(key)

        if (existing) {
            existing.val = value
            if (existing !== this.tail_pointer) {
                const prevNode = existing.prev
                const nextNode = existing.next
                if (prevNode) prevNode.next = nextNode
                if (nextNode) nextNode.prev = prevNode
                if (existing === this.head_pointer) this.head_pointer = nextNode

                const prevTail = this.tail_pointer
                prevTail.next = existing
                existing.prev = prevTail
                existing.next = null
                this.tail_pointer = existing
            }
            return
        }

        if (this.mapCache.size === this.max_capacity) {
            const evicted = this.head_pointer
            this.mapCache.delete(evicted.key)
            if (evicted === this.tail_pointer) {
                this.head_pointer = null
                this.tail_pointer = null
            } else {
                this.head_pointer = evicted.next
                this.head_pointer.prev = null
                evicted.next = null
            }
        }

        const newNode = this.createNode(value, key)
        if (this.tail_pointer) {
            newNode.prev = this.tail_pointer
            this.tail_pointer.next = newNode
            this.tail_pointer = newNode
        } else {
            this.head_pointer = newNode
            this.tail_pointer = newNode
        }
        this.mapCache.set(key, newNode)
    }

    private createNode(value: number, key: number) {
        return {
            val: value,
            key: key,
            next: null,
            prev: null
        }
    }
}
