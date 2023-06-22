import { client } from '$lib/graphql-client';
import { homePageQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { homePages } = await client.request(homePageQuery);
	return {
		homePages
	};
};
