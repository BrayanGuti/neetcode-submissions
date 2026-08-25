class MinStack {
    constructor() {}

    private stack = []
    private minStack = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const lastMin = this.minStack[this.minStack.length - 1]

        if(val < (lastMin ?? Infinity)){
            this.minStack.push(val)
        } else {
            this.minStack.push(lastMin)
        }

       
        
        this.stack.push(val)

    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minStack.pop()
        this.stack.pop()
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
