import { ApplicationType } from './applications.types';
export * from './applications.types';

export async function fetchApplications(page: number, limit = 5): Promise<ApplicationType[]> {
	const url = `http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(`Error fetching data: ${error}`);
	}
}
