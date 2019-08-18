class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        if (index < this.length) {
            return this.data[index]
        } else
            return undefined;
    }

    indexOf(item) {
        for (const key in this.data) {
            if (this.data[key] == item){
                return key;
            }
        }
        return undefined;
    }

    // Add to the end of an Array
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // Remove item from the end of an Array
    pop() {
        const lastItem = this.data[this.length -1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    
    // Delete item @ index
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    // Shift item @ index
    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];            
        }
        delete this.data[this.length-1];
        this.length--;
    }
}