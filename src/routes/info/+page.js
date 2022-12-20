import { client } from '$lib/graphql-client';
import { aboutQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { abouts } = await client.request(aboutQuery);
	return {
		about: abouts[0]
	};
};
