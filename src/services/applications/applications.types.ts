type LoanHistory = {
	loan_started: string;
	loan_ended: string;
	principle: number;
	interest_rate: number;
	interest: number;
};

export type ApplicationType = {
	id: number;
	company: string;
	first_name: string;
	last_name: string;
	email: string;
	loan_amount: number;
	loan_type: string;
	date_created: string;
	expiry_date: string;
	avatar: string;
	loan_history: LoanHistory[];
};
