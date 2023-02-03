const names = [
	"abul",
	"kabul",
	"mabul",
	"abul",
	"gabul",
	"kabul",
	"abul",
	"ebul",
	"pibul",
	"ebul",
];

function removeDuplicate(names) {
	let finalName = [];
	for (let i = 0; i < names.length; i++) {
		const element = names[i];
		if (finalName.includes(element) === false) {
			finalName.push(element);
		}
	}
	return finalName;
}

const list = removeDuplicate(names);
console.log(list);
