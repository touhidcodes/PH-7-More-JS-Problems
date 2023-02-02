const number = 34;
const string = "bangadesh";
const boolean = true;
const object = {
	id: 24,
	name: "touhid",
	age: 23,
};
function add(num1, num2) {
	return num1 + num2;
}
const array = [12, 34, 54, 21, 32, 12, 4, 45, 65];

// Check type of
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof object);
console.log(typeof add);

// For check array use Array.isArray
console.log(Array.isArray(array));

// -------------------------------------
// Find array value
console.log(array.includes(21));
console.log(array.indexOf(19));

// Concatenate
const array2 = [34, 56, 776, 765, 65, 565, 44];
const fullArray = array.concat(array2);
console.log(fullArray);
