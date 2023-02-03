/* 
1. if a ticket numbers is less then 100 per ticket price: 100
2. if a ticket numbers is more then 100 but less then 200, first 100 ticket 100, rest of ticket price: 90
3. if a ticket numbers is more then 200 but less then 200, first 100 ticket 100, rest of ticket price: 70
*/

function discount(ticket) {
	const firstRate = 100;
	const secondRate = 90;
	const rest = 70;
	if (ticket <= 100) {
		const price = firstRate * ticket;
		return price;
	} else if (ticket <= 200) {
		const firstPrice = 100 * firstRate;
		const secondPrice = secondRate * ticket - 100;
		const price = firstPrice + secondPrice;
		return price;
	} else {
		const firstPrice = 100 * firstRate;
		const secondPrice = 200 * secondRate;
		const restPrice = rest * ticket - 200;
		const price = firstPrice + secondPrice + restPrice;
		return price;
	}
}

const tickets = 205;
const ticketDiscount = discount(tickets);
console.log(ticketDiscount);
