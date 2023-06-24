import { GraphQLClient } from "graphql-request";
const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT as string;
export const client = new GraphQLClient(HYGRAPH_ENDPOINT);
