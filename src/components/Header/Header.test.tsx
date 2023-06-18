import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	test('renders header component with logo and title', () => {
		render(<Header />);

		// Assert logo is rendered
		const logoElement = screen.getByTestId('logo');
		expect(logoElement).toBeInTheDocument();

		// Assert title is rendered
		const titleElement = screen.getByText(/Application Portal/i);
		expect(titleElement).toBeInTheDocument();
	});
});
