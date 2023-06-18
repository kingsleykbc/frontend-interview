import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
	test('should render with the correct width and CSS class', () => {
		const width = 50;
		render(<Spinner width={width} />);

		const spinnerElement = screen.getByTestId('spinner');
		expect(spinnerElement).toHaveStyle(`width: ${width}px`);
		expect(spinnerElement).toHaveStyle(`height: ${width}px`);
		expect(spinnerElement).toHaveClass('Spinner');
	});
});
