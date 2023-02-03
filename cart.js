const shoppingCart = [
	{
		name: "shoe",
		price: 1200,
		quantity: 2,
	},
	{
		name: "shirt ",
		price: 1000,
		quantity: 5,
	},
	{
		name: "pant",
		price: 1500,
		quantity: 2,
	},
	{
		name: "belt",
		price: 600,
		quantity: 2,
	},
	{
		name: "sunglass",
		price: 1000,
		quantity: 2,
	},
];

function sumShopping(product) {
	let total = 0;
	for (let i = 0; i < product.length; i++) {
		const element = product[i];
		const price = element.price * element.quantity;
		total += price;
	}
	return total;
}

const totalPrice = sumShopping(shoppingCart);
console.log(totalPrice);
