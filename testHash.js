// Import the HashTable class from hash.js
const HashTable = require('./hash');

// Create an instance of HashTable
const hashTable = new HashTable();

// Add some key-value pairs
hashTable.set("Carlos", "I am the old value.");
hashTable.set("Alice", "I am Alice.");
hashTable.set("Bob", "I am Bob.");

// Test the has method
console.log(hashTable.has("Carlos")); // Output: true
console.log(hashTable.has("Alice"));  // Output: true
console.log(hashTable.has("Bob"));    // Output: true
console.log(hashTable.has("Eve"));    // Output: false

// Test the remove method
console.log(hashTable.remove("Carlos")); // Output: true
console.log(hashTable.remove("Eve"));    // Output: false
console.log(hashTable.has("Carlos"));    // Output: false

// Test the length method
console.log(hashTable.length()); // Output: 2 (Alice and Bob are still in the hash table)

// Test the clear method
hashTable.clear();
console.log(hashTable.length()); // Output: 0 (all entries should be removed)
console.log(hashTable.has("Alice"));  // Output: false
console.log(hashTable.has("Bob"));    // Output: false

// Add key-value pairs again for keys, values, and entries methods
hashTable.set("Carlos", "I am the old value.");
hashTable.set("Alice", "I am Alice.");
hashTable.set("Bob", "I am Bob.");

// Test the keys method
console.log(hashTable.keys()); // Output: ["Carlos", "Alice", "Bob"]

// Test the values method
console.log(hashTable.values()); // Output: ["I am the old value.", "I am Alice.", "I am Bob."]

// Test the entries method
console.log(hashTable.entries()); // Output: [["Carlos", "I am the old value."], ["Alice", "I am Alice."], ["Bob", "I am Bob."]]




