export default class ArrayList<T> {
    public length: number;
    private array: T[];
    // capacity accessed as array.length

    constructor(capacity: number) {
        this.array = new Array(capacity);
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length === 0) {
            this.array[0] = item;
        } else if (this.length < this.array.length) {
            // shift elements to the right
            for (let i = this.length; i > 0; i--) {
                this.array[i] = this.array[i - 1];
            }
            this.array[0] = item;
        } else {
            // new array with double capacity
            const newArray = new Array(this.array.length * 2);
            newArray[0] = item;
            for (let i = 0; i < this.length; i++) {
                newArray[i + 1] = this.array[i];
            }
            this.array = newArray;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        // check if index is out of bounds
        if (idx > this.length || idx < 0) {
            console.log('Index out of bounds');
            return;
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            // otherwise, find the node before the index
            for (let i = this.length; i > idx; i--) {
                this.array[i] = this.array[i - 1];
            }
            this.array[idx] = item;
            this.length++;
        }
    }
    append(item: T): void {
        // check if array is full
        if (this.length === this.array.length) {
            // double capacity
            const newArray = new Array(this.array.length * 2);
            for (let i = 0; i < this.length; i++) {
                newArray[i] = this.array[i];
            }
            this.array = newArray;
        }
        this.array[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        // find the index of the item
        const idx = this.array.indexOf(item);
        // if found, remove it
        if (idx !== -1) {
            return this.removeAt(idx);
        } else {
            return undefined;
        }
    }
    get(idx: number): T | undefined {
        // check if index is out of bounds
        if (idx >= this.length || idx < 0) {
            console.log('Index out of bounds');
            return undefined;
        } else {
            return this.array[idx];
        }
    }
    removeAt(idx: number): T | undefined {
        // check if index is out of bounds
        if (idx >= this.length || idx < 0) {
            console.log('Index out of bounds');
            return undefined;
        } else {
            const item = this.array[idx];
            // shift elements to the left
            for (let i = idx; i < this.length - 1; i++) {
                this.array[i] = this.array[i + 1];
            }
            this.length--;
            return item;
        }
    }
}