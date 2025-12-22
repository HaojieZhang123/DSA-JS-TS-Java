class ArrayList {
    constructor(capacity) {
        this.array = new Array(capacity);
        this.length = 0;
    }

    prepend(item) {
        this.insertAt(item, 0);
    }

    append(item) {
        this.insertAt(item, this.length);
    }

    insertAt(item, idx) {
        // check for index bounds
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        // resize array if needed
        if (this.length === this.array.length) {
            this._resize();
        }
        // shift elements to the right
        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
        // insert item
        this.array[idx] = item;
        this.length++;
    }

    remove(item) {
        let idx = -1;
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                idx = i;
                break;
            }
        }
        if (idx !== -1) {
            this.removeAt(idx);
        }
        return undefined;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }
        return this.array[idx];
    }

    removeAt(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }
        const item = this.array[idx];

        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array[this.length - 1] = undefined;
        this.length--;
        return item;
    }

    _resize() {
        const newCapacity = this.array.length === 0 ? 4 : this.array.length * 2;
        const newArray = new Array(newCapacity);

        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
}