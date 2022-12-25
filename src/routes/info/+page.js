import { client } from '$lib/graphql-client';
import { infoQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { infos } = await client.request(infoQuery);
	return {
		info: infos[0]
	};
};
