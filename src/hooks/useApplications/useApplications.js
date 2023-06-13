import { useState, useEffect } from 'react';
import { fetchApplications } from '../../services/applications';

export const useApplications = () => {
	const [page, setPage] = useState(1);
	const [applications, setApplications] = useState(null);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(true);
	const [error, setError] = useState(null);
	const [hasMorePages, setHasMorePages] = useState(false);

	const loadPage = (newPage = page + 1) => {
		console.log({ newPage });
		setPage(newPage);
	};

	useEffect(() => {
		const getApplications = async () => {
			if (applications === null) {
				setLoading(true);
			} else {
				setLoadingMore(true);
			}
			try {
				const newApplications = await fetchApplications(page);
				setApplications(prevApplications => [...(prevApplications || []), ...newApplications]);
				setHasMorePages(newApplications.length > 0);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
				setLoadingMore(false);
			}
		};

		getApplications();
	}, [page]);

	const empty = applications?.length === 0;

	return { applications, loading, empty, error, hasMorePages, loadPage, loadingMore, page };
};

export default useApplications;
