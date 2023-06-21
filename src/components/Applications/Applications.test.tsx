import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Applications from './Applications';
import { fetchApplications } from '../../services/applications/applications';

jest.mock('../../services/applications/applications');

describe('Applications', () => {
	beforeEach(() => {
		(fetchApplications as jest.MockedFunction<any>).mockReset();
	});

	test('should render loading state', async () => {
		render(<Applications />);

		expect(screen.getByText('Loading...')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
		});
	});

	test('should render error state', async () => {
		render(<Applications />);
		const error = 'Error fetching applications';
		(fetchApplications as jest.MockedFunction<any>).mockRejectedValue(new Error(error));

		await waitFor(() => {
			expect(screen.getByText(/Error:/i)).toBeInTheDocument();
		});
	});

	test('should render applications', async () => {
		const applications = [
			{ id: 1, name: 'Application 1' },
			{ id: 2, name: 'Application 2' }
		];
		(fetchApplications as jest.MockedFunction<any>).mockResolvedValue(applications);

		render(<Applications />);

		await waitFor(() => {
			const applicationElements = screen.getAllByTestId('application');
			expect(applicationElements.length).toBe(applications.length);
		});
	});
});
