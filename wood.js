/* 
1. chair --> 3cft
2. table --> 10cft
3. bed --> 50cft
fixed: Wood requirement
*/

function woodCount(chair, table, bed) {
	const chairWood = chair * 3;
	const tableWood = table * 10;
	const bedWood = bed * 50;
	const totalWood = chairWood + tableWood + bedWood;
	return totalWood;
}

console.log("Total Number Wood needed:", woodCount(2, 3, 1), "cft");
