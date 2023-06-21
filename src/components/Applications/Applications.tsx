import React from 'react';
import Application from '../Application/Application';
import styles from './Applications.module.css';
import useApplications from '../../hooks/useApplications/useApplications';
import { Button } from '../../ui/Button/Button';
import Spinner from '../../ui/Spinner/Spinner';

const Applications = () => {
	const { applications, error, loadPage, hasMorePages, status, page } = useApplications();

	const statusViews = {
		loading: (
			<div className={styles.Status}>
				<Spinner width={70} /> <p>Loading...</p>
			</div>
		),
		empty: (
			<div className={styles.Status}>
				<div>🗍</div>
				<p>No Applications</p>
			</div>
		),
		error: (
			<div className={styles.Status}>
				<div>❌</div>
				<p>Error: {error}</p>
			</div>
		)
	};

	if (status in statusViews) {
		return statusViews[status as 'loading' | 'empty' | 'error'];
	}

	return (
		<div data-testid='applications' className={styles.Applications}>
			{applications!.map(application => (
				<Application key={application.id} application={application} />
			))}
			<div className={styles.ButtonSection}>
				{status === 'loading more' && (
					<div className={styles.LoadMoreMessage}>
						<Spinner /> Loading page {page}
					</div>
				)}
				{hasMorePages && (
					<div id='loadMore' className={styles.LoadMoreButton}>
						<Button onClick={() => loadPage()}>Load more</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Applications;
