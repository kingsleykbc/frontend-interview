export function formatToGBP(number: number): string {
	const formatter = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
		minimumFractionDigits: 2
	});

	return formatter.format(number);
}
