const sanityClient = require("@sanity/client");
const client = sanityClient({
	projectId: "hleomf1s",
	dataset: "production",
	apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
	token: "", // or leave blank for unauthenticated usage
	useCdn: true, // `false` if you want to ensure fresh data
});

const doc1 = {
	_id: "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528",
	_type: "eirlybackers",
	txHash: "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528",
	userAddress: "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528",
	lightAmount: 2,
	vantaAmount: 2,
	timestamp: new Date(Date.now()).toISOString(),
};

const doc2 = {
	_id: "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528",
	_type: "eirlybackers",
	txHash: "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528",
	userAddress: "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528",
	lightAmount: 4,
	vantaAmount: 4,
	timestamp: new Date(Date.now()).toISOString(),
};

//`*[ _type == "phaselimits"] {
//	lightAmount, vantaAmount
//  }`
const fun = async () => {
	const query = `*[ _type == "phaselimits"] {
		lightAmount, vantaAmount
	  }`;

	const res = await client.fetch(query);
	console.log(res);
};

const fun2 = async () => {
	//const wallet = "0x2E82742be1C1738a7c8c2734d4b2c2d6330A5E8F";
	let params = { wallet: "0x2E82742be1C1738a7c8c2734d4b2c2d6330A5E8F" };
	params.wallet = "0xd6C1f8b59b7B01A5F1f2B898648208266CBa7528";
	const query = `*[ _type == "eirlybackers" && id== $wallet] {
		lightAmount, vantaAmount
	  }`;

	const res = await client.fetch(query, params);
	console.log(res);
	console.log(params.wallet);
};

fun2();
