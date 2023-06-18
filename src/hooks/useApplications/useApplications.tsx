import { useState, useEffect } from 'react';
import { ApplicationType, fetchApplications } from '../../services/applications/applications';

export type ApplicationStatusType = 'loading' | 'loading more' | 'error' | 'success' | 'empty';

export const useApplications = () => {
	const [applications, setApplications] = useState<ApplicationType[] | null>(null);
	const [status, setStatus] = useState<ApplicationStatusType>('loading');
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);
	const [hasMorePages, setHasMorePages] = useState(false);

	const loadPage = (newPage = page + 1) => {
		setPage(newPage);
		window.scrollTo(0, document.body.scrollHeight);
	};

	// Fetch and update applications list
	useEffect(() => {
		const getApplications = async () => {
			setStatus(applications === null ? 'loading' : 'loading more');
			try {
				let newApplications = await fetchApplications(page);
				setHasMorePages(newApplications.length > 0);
				newApplications = [...(applications || []), ...newApplications];
				setApplications(newApplications);
				setStatus(newApplications.length === 0 ? 'empty' : 'success');
			} catch (err: any) {
				setError(err.message);
				setStatus('error');
			}
		};
		getApplications();
	}, [page]);

	// Scroll to bottom of page when loading more
	useEffect(() => {
		if (status === 'loading more') {
			const loadMoreElement = document.querySelector('#loadMore') as HTMLElement;
			if (loadMoreElement) {
				loadMoreElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
			}
		}
	}, [status]);

	return { applications, error, status, hasMorePages, loadPage, page };
};

export default useApplications;
