import React from 'react';
import Application from './components/Application/Application';
import styles from './Applications.module.css';
import useApplications from './hooks/useApplications/useApplications';
import { Button } from './ui/Button/Button';
import Spinner from './ui/Spinner/Spinner';

const Applications = () => {
	const { applications, loading, empty, error, loadPage, hasMorePages, loadingMore, page } = useApplications();

	if (loading) {
		return (
			<div className={styles.Status}>
				<Spinner width={70} /> <p>Loading...</p>
			</div>
		);
	}
	if (empty) {
		return (
			<div className={styles.Status}>
				<div>🗍</div>
				<p>No Applications</p>
			</div>
		);
	}
	if (error) {
		return (
			<div className={styles.Status}>
				<div>❌</div>
				<p>Error: {error}</p>
			</div>
		);
	}

	return (
		<div data-testid='applications' className={styles.Applications}>
			{applications.map(application => (
				<Application key={application.id} application={application} />
			))}
			<div className={styles.ButtonSection}>
				{loadingMore && (
					<div className={styles.LoadMoreMessage}>
						<Spinner /> Loading page {page}
					</div>
				)}
				{hasMorePages && <Button onClick={() => loadPage()}>Load more</Button>}
			</div>
		</div>
	);
};

export default Applications;
