class MinStack {
    constructor() {}

    private stack = []
    private minStack = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)

        if(this.minStack.length === 0) {
            this.minStack.push(val)            
            return
        }

        if(this.minStack[this.minStack.length - 1] > val) {
            this.minStack.push(val)            
            return
        }

        this.minStack.push(this.minStack[this.minStack.length - 1])            
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}
