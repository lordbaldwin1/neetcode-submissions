class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || [];
        let l = 0;
        let r = arr.length - 1;
        let res = "";

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const mTime = arr[m][1];

            if (mTime === timestamp) {
                res = arr[m][0];
                break;
            } else if (mTime <= timestamp) {
                res = arr[m][0];
                l = m + 1;;
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
