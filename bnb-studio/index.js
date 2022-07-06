const sanityClient = require("@sanity/client");
const client = sanityClient({
	projectId: "hleomf1s",
	dataset: "production",
	apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
	token:
		"sk8M2Jwf5QrbPrMsMWlZGILzUA19eDofLonhFSo7DQWTHOAmZhgqsSuXEl4GbcWuX43CBJ1NhBvdSnWqAUK6c56OWpbr8i6UHiUXXoa37AK1VLHtBN5o1G4E6eOoB1NSAaGnHmn0JHW96Gku2g0L2L798dyFMr1skGW4kTAIADQp9fTYaqHC", // or leave blank for unauthenticated usage
	useCdn: true, // `false` if you want to ensure fresh data
});

// update counts on Transaction
// update total supply

const updateDb = async () => {
	try {
		const txDocs = {
			_id: "0x27e6E77e29bEcf2c231D7333959ae9EFb0DE51eE",
			_type: "eirlybackers",
			id: "0x27e6E77e29bEcf2c231D7333959ae9EFb0DE51eE",
			txHash: "0x27e6E77e29bEcf2c231D7333959ae9EFb0DE51eE",
			userAddress: "0x27e6E77e29bEcf2c231D7333959ae9EFb0DE51eE",
			lightAmount: 2,
			vantaAmount: 6,
			timestamp: new Date(Date.now()).toISOString(),
		};

		// querying to see if that account previously exists
		const currentWallet = "0x27e6E77e29bEcf2c231D7333959ae9EFb0DE51eE";

		let params = { wallet: "" };
		params.wallet = currentWallet;
		const query = `*[ _type == "eirlybackers" && id== $wallet]`;
		const response = await client.fetch(query, params);
		console.log(response.length);

		if (response.length != 0) {
			client
				.patch(currentWallet) // Document ID to patch
				.inc({ lightAmount: txDocs.lightAmount })
				.inc({ vantaAmount: txDocs.vantaAmount }) // Increment field by count
				.commit();
		} else {
			const res = await client.createIfNotExists(txDocs);
		}

		// Updating Phase limits
		client
			.patch("b799123b-1d85-4ef9-94db-0d59562d32ee") // Document ID to patch
			.inc({ lightAmount: txDocs.lightAmount })
			.inc({ vantaAmount: txDocs.vantaAmount }) // Increment field by count
			.commit();
	} catch (error) {
		console.log(error);
	}
};

updateDb();
