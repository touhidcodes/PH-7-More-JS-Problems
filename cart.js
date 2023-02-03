const shoppingCart = [
	{
		name: "shoe",
		price: 1200,
	},
	{
		name: "shirt ",
		price: 1000,
	},
	{
		name: "pant",
		price: 1500,
	},
	{
		name: "belt",
		price: 600,
	},
	{
		name: "sunglass",
		price: 1000,
	},
];

function sumShopping(product) {
	let total = 0;
	for (let i = 0; i < product.length; i++) {
		const element = product[i];
		const price = element.price;
		total += price;
	}
	return total;
}

const totalPrice = sumShopping(shoppingCart);
console.log(totalPrice);
