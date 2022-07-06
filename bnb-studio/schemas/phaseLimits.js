export const phaseLimitsSchema = {
	name: "phaselimits",
	title: "PhaseLimits",
	type: "document",
	fields: [
		{
			name: "phaseName",
			title: "Phase Name",
			type: "string",
		},
		{
			name: "lightAmount",
			title: "Light",
			type: "number",
			initialValue: 0,
			readOnly: true,
		},
		{
			name: "vantaAmount",
			title: "Vanta",
			type: "number",
			initialValue: 0,
			readOnly: true,
		},
	],
};
