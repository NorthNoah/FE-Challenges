class Set {
    constructor() {
        this.items = []
    }

    add(element) {
        if (!this.has(element)) {
            this.items.push(element)
            return true
        }

        return false
    }

    delete(element) {
        if (this.has(element)) {
            // filter筛选
            this.items = this.items.filter((item) => item !== element)
            return true
        } 
        return false
    }

    has(element) {
        return this.items.includes(element)
    }

    values() {
        return [...this.items]
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}