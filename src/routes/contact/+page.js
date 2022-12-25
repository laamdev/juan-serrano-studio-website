import { client } from '$lib/graphql-client';
import { contactQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { contacts } = await client.request(contactQuery);
	return {
		contact: contacts[0]
	};
};
