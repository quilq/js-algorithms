class MyHashTable {
    // Construct hash table with size
    constructor(size){
      this.data = new Array(size);
    }
  
    // Hash funtion with the given key
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    // Add key - value pair
    add (key, value) {
      this._hash(key)
    }
  
    // Get the value of the given key
    get(key){
      if (this.data[this._hash(key)]);
    }
    
    // Remove the key and its associated value
    remove(key){
      this.data[this._hash(key)] = null;
    }

    // Return all keys
    keys(){
    }

    // Check if the hash table has a pair with the selected key
    contains(key){

    }

    // Return number of key-value pairs
    count(){

    }
  }