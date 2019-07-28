class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Get item @ index
    get(index) {
        if (index < this.length) {
            return this.data[index]
        } else
            return undefined;
    }

    // Find the index of an item in the Array
    indexOf(item) {
        for (const key in this.data) {
            if (this.data[key] == item){
                return key;
                break;
            }
        }
        return undefined;
    }

    // Delete item @ index
    deleteAt(index) {

    }

    // Insert item @ index
    insertAt(index) {
    }

    // Add to the end of an Array
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    // Remove from the end of an Array
    pop() {
        delete this.data[this.length-1];
        this.length--;
    }

    // Remove from the front of an Array
    shift() {
        for (let i = 0; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];            
        }
        delete this.data[this.length-1];
        this.length--;
    }

    // Add to the front of an Array
    unshift(item) {

    }
}