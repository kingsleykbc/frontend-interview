import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	test('renders header and applications', () => {
		render(<App />);
		const headerElement = screen.getByTestId('header');
		expect(headerElement).toBeInTheDocument();
	});
});
