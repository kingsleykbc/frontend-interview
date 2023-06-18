import React from 'react';
import { render, screen } from '@testing-library/react';
import Application from './Application';

describe('Application component', () => {
	const application = {
		id: 1,
		company: 'Example Company',
		first_name: 'John',
		last_name: 'Doe',
		email: 'johndoe@example.com',
		loan_amount: 5000,
		loan_type: 'Flexi-Loan',
		avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg',
		date_created: new Date('2023-06-10').toISOString(),
		expiry_date: new Date('2023-06-20').toISOString(),
		loan_history: []
	};

	test('renders application details correctly', () => {
		render(<Application application={application} />);

		const companyLabel = screen.getByText('Company');
		const companyName = screen.getByText('Example Company');
		const nameLabel = screen.getByText('Name');
		const fullName = screen.getByText('John Doe');
		const emailLabel = screen.getByText('Email');
		const emailLink = screen.getByRole('link', { name: /johndoe@example\.com/i });
		const loanAmountLabel = screen.getByText('Loan Amount');
		const loanAmount = screen.getByText('£5,000.00');
		const applicationDateLabel = screen.getByText('Application Date');
		const applicationDate = screen.getByText('10-06-2023');
		const expiryDateLabel = screen.getByText('Expiry date');
		const expiryDate = screen.getByText('20-06-2023');

		expect(companyLabel).toBeInTheDocument();
		expect(companyName).toBeInTheDocument();
		expect(nameLabel).toBeInTheDocument();
		expect(fullName).toBeInTheDocument();
		expect(emailLabel).toBeInTheDocument();
		expect(emailLink).toBeInTheDocument();
		expect(loanAmountLabel).toBeInTheDocument();
		expect(loanAmount).toBeInTheDocument();
		expect(applicationDateLabel).toBeInTheDocument();
		expect(applicationDate).toBeInTheDocument();
		expect(expiryDateLabel).toBeInTheDocument();
		expect(expiryDate).toBeInTheDocument();
	});
});
