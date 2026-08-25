class MinStack {
    constructor() {}

    private stack = []
    private minStack = []
    private maxStack = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const lastMin = this.minStack[this.minStack.length - 1]
        const lastMax = this.maxStack[this.maxStack.length - 1]

        console.log(lastMin)
        console.log(lastMax)
        console.log(val < (lastMin ?? Infinity))



        if(val < (lastMin ?? Infinity)){
            this.minStack.push(val)
        } else {
            this.minStack.push(lastMin)
        }

        if(val > (lastMax ?? -Infinity )){
            this.maxStack.push(val)
        } else {
            this.maxStack.push(lastMax)
        }
        
        this.stack.push(val)

    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minStack.pop()
        this.maxStack.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.maxStack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}
