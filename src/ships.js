class Ship {
    constructor(type, length) {
        this.type = type
        this.length = length
        this.hits = 0
        this.destroyed = false
    }

    hit() {
        this.hits++
        this.checkDestroyed()
        if (this.destroyed) {
            console.log(`${this.type} DESTROYED!`)
        }
    }

    checkDestroyed() {
        if (this.hits === this.length) {
            this.destroyed = true
        }
    }
}

module.exports = Ship