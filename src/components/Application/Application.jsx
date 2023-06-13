import React from 'react';
import styles from './Application.module.css';
import { formatDate } from '../../utils/dates/dates';

const Application = ({ application }) => {
	return (
		<div data-testid='application' className={styles.Application}>
			<div className={styles.cell}>
				<sub>Company</sub>
				<span>{application.company}</span>
			</div>
			<div className={styles.cell}>
				<sub>Name</sub>
				<span>
					{application.first_name} {application.last_name}
				</span>
			</div>
			<div className={styles.cell}>
				<sub>Email</sub>
				<a href={`mailto:${application.email}`}>{application.email}</a>
			</div>
			<div className={styles.cell}>
				<sub>Loan Amount</sub>
				<span>{application.loan_amount}</span>
			</div>
			<div className={styles.cell}>
				<sub>Application Date</sub>
				<span>{formatDate(application.date_created)}</span>
			</div>
			<div className={styles.cell}>
				<sub>Expiry date</sub>
				<span>{formatDate(application.expiry_date)}</span>
			</div>
		</div>
	);
};

export default Application;
