/* 
1. show the output from 1-50
2. if the number is divisible by 3 instead of the number show foo
3. if the number is divisible by 5 instead of the number show bar
4. if the number is divisible by 3 & 5 instead of the number show foobar
*/

for (let i = 0; i < 50; i++) {
	// const element = i;
	// console.log(element);
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("foobar");
	}
	if (i % 3 === 0) {
		console.log("foo");
	} else if (i % 5 === 0) {
		console.log("bar");
	} else {
		console.log(i);
	}
}
