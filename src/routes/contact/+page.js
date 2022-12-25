import { client } from '$lib/graphql-client';
import { contactQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { infos } = await client.request(contactQuery);
	return {
		info: infos[0]
	};
};
