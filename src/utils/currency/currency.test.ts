import { formatToGBP } from './currency';

describe('formatToGBP', () => {
	test('formats number to GBP currency', () => {
		const number = 1234.56;
		const formatted = formatToGBP(number);
		expect(formatted).toBe('£1,234.56');
	});

	test('handles negative numbers', () => {
		const number = -987.65;
		const formatted = formatToGBP(number);
		expect(formatted).toBe('-£987.65');
	});

	test('handles zero', () => {
		const number = 0;
		const formatted = formatToGBP(number);
		expect(formatted).toBe('£0.00');
	});

	test('handles decimal numbers', () => {
		const number = 99.9;
		const formatted = formatToGBP(number);
		expect(formatted).toBe('£99.90');
	});
});
