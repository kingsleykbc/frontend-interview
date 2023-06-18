import React from 'react';
import styles from './Application.module.css';
import { formatDate } from '../../utils/dates/dates';
import { ApplicationType } from '../../services/applications/applications';
import { formatToGBP } from '../../utils/currency/currency';

export interface ApplicationPropsType {
	application: ApplicationType;
}

const Application = ({
	application: { company, first_name, last_name, email, loan_amount, date_created, expiry_date }
}: ApplicationPropsType) => {
	return (
		<div data-testid='application' className={styles.Application}>
			<div className={styles.cell}>
				<sub>Company</sub>
				<span>{company}</span>
			</div>
			<div className={styles.cell}>
				<sub>Name</sub>
				<span>
					{first_name} {last_name}
				</span>
			</div>
			<div className={styles.cell}>
				<sub>Email</sub>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
			<div className={styles.cell}>
				<sub>Loan Amount</sub>
				<span>{formatToGBP(loan_amount)}</span>
			</div>
			<div className={styles.cell}>
				<sub>Application Date</sub>
				<span>{formatDate(date_created)}</span>
			</div>
			<div className={styles.cell}>
				<sub>Expiry date</sub>
				<span>{formatDate(expiry_date)}</span>
			</div>
		</div>
	);
};

export default Application;
