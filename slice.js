const friends = [23, 45, 54, 34, 45, 32, 45, 23, 23];
// Slice
const partial = friends.slice(2, 5);
console.log(partial);

// Splice
const partial2 = friends.splice(3, 6);
console.log(partial2);

// Splice with add element
const partial3 = friends.splice(3, 5, 34, 45, 56, 23);
console.log(partial3);
