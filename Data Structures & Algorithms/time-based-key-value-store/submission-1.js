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
        let arr = this.keyStore.get(key) || [];
        let l = 0;
        let r = arr.length - 1;
        let res = "";

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const mTimestamp = arr[m][1];

            if (mTimestamp === timestamp) {
                res = arr[m][0];
                r = l - 1;
            } else if (mTimestamp < timestamp) {
                res = arr[m][0];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
