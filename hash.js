class HashTable {
    constructor(size = 50) {
      this.buckets = new Array(size).fill(null).map(() => []);
      this.count = 0; // Initialize count of stored keys
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode;
    }
  
    set(key, value) {
      const index = this.hash(key) % this.buckets.length;
  
      // Error check for out of bound access
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
  
      // Get the bucket
      const bucket = this.buckets[index];
  
      // Check if the key already exists in the bucket
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        if (k === key) {
          // Key found, update value
          bucket[i] = [key, value];
          return;
        }
      }
  
      // Key not found, add new key-value pair
      bucket.push([key, value]);
      this.count++; // Increment count
    }
  
    get(key) {
      const index = this.hash(key) % this.buckets.length;
  
      // Error check for out of bound access
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
  
      // Get the bucket
      const bucket = this.buckets[index];
  
      // Find the key in the bucket
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        if (k === key) {
          return v;
        }
      }
  
      // Key not found
      return null;
    }
  
    has(key) {
      const index = this.hash(key) % this.buckets.length;
  
      // Error check for out of bound access
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
  
      // Get the bucket
      const bucket = this.buckets[index];
  
      // Check if the key exists in the bucket
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        if (k === key) {
          return true;
        }
      }
  
      // Key not found
      return false;
    }
  
    remove(key) {
      const index = this.hash(key) % this.buckets.length;
  
      // Error check for out of bound access
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
  
      // Get the bucket
      const bucket = this.buckets[index];
  
      // Find the key in the bucket and remove it
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        if (k === key) {
          bucket.splice(i, 1);
          this.count--; // Decrement count
          return true;
        }
      }
  
      // Key not found
      return false;
    }
  
    length() {
      return this.count; // Return the count of stored keys
    }
  
    clear() {
      this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
      this.count = 0; // Reset count
    }
  
    keys() {
      const keysArray = [];
      // Iterate over each bucket
      for (const bucket of this.buckets) {
        // Iterate over each key-value pair in the bucket
        for (const [key, value] of bucket) {
          keysArray.push(key); // Add the key to the keysArray
        }
      }
      return keysArray; // Return the array of keys
    }
  
    values() {
      const valuesArray = [];
      // Iterate over each bucket
      for (const bucket of this.buckets) {
        // Iterate over each key-value pair in the bucket
        for (const [key, value] of bucket) {
          valuesArray.push(value); // Add the value to the valuesArray
        }
      }
      return valuesArray; // Return the array of values
    }
  
    entries() {
      const entriesArray = [];
      // Iterate over each bucket
      for (const bucket of this.buckets) {
        // Iterate over each key-value pair in the bucket
        for (const [key, value] of bucket) {
          entriesArray.push([key, value]); // Add the key-value pair to the entriesArray
        }
      }
      return entriesArray; // Return the array of key-value pairs
    }
  }
  
  // Export the HashTable class
  module.exports = HashTable;
  