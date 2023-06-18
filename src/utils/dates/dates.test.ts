import { formatDate } from './dates';

describe('formatDate', () => {
	test('formats date string to dd-mm-yyyy format', () => {
		const dateString = '2023-06-18';
		const formatted = formatDate(dateString);
		expect(formatted).toBe('18-06-2023');
	});

	test('handles single-digit day and month', () => {
		const dateString = '2023-01-01';
		const formatted = formatDate(dateString);
		expect(formatted).toBe('01-01-2023');
	});

	test('handles date with leading zeros', () => {
		const dateString = '2023-09-09';
		const formatted = formatDate(dateString);
		expect(formatted).toBe('09-09-2023');
	});

	test('handles date with different year', () => {
		const dateString = '2022-12-31';
		const formatted = formatDate(dateString);
		expect(formatted).toBe('31-12-2022');
	});
});
