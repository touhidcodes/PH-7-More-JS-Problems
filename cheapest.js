const phones = [
	{
		name: "Samsung",
		camera: 12,
		storage: "64 GB",
		price: 36000,
		color: "silver",
	},
	{
		name: "I-phone",
		camera: 18,
		storage: "124 GB",
		price: 106000,
		color: "silver",
	},
	{
		name: "Xaoumi",
		camera: 24,
		storage: "128 GB",
		price: 26000,
		color: "silver",
	},
	{
		name: "Redmi",
		camera: 12,
		storage: "128 GB",
		price: 14000,
		color: "black",
	},
	{
		name: "Tecno",
		camera: 12,
		storage: "64 GB",
		price: 16000,
		color: "black",
	},
	{
		name: "HTC",
		camera: 12,
		storage: "64 GB",
		price: 19000,
		color: "black",
	},
	{
		name: "BackBerry",
		camera: 12,
		storage: "64 GB",
		price: 29000,
		color: "black",
	},
];

function cheapestPhone(phones) {
	let cheapest = phones[0];
	for (let i = 0; i < phones.length; i++) {
		const element = phones[i];
		if (element.price < cheapest.price) {
			cheapest = element;
		}
	}
	return cheapest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);
