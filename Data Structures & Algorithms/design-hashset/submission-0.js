class MyHashSet {
    constructor() {
        this.hashSet = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.hashSet.indexOf(key) === -1) {
            this.hashSet.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const i = this.hashSet.indexOf(key);
        if (i === -1) return;
        this.hashSet.splice(i, 1);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.hashSet.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
