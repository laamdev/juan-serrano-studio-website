import { client } from '$lib/graphql-client';
import { authorsQuery, siteMetadataQuery, socialsQuery } from '$lib/graphql-queries';
import { writable } from 'svelte/store';
