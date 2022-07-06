export const eirlyBackersSchema = {
	name: "eirlybackers",
	title: "EirlyBackers",
	type: "document",
	fields: [
		{ name: "id", title: "Id", type: "string" },
		{
			name: "txHash",
			title: "Transaction Hash",
			type: "string",
		},
		{
			name: "userAddress",
			title: "User Account",
			type: "string",
		},
		{
			name: "lightAmount",
			title: "Light",
			type: "number",
		},
		{
			name: "vantaAmount",
			title: "Vanta",
			type: "number",
		},
		{
			name: "timestamp",
			title: "Timestamp",
			type: "datetime",
		},
	],
};
