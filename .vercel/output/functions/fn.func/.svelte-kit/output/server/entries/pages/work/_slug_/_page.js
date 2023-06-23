import { c as client, p as projectQuery } from "../../../../chunks/graphql-queries.js";
const load = async ({ params }) => {
  const { slug } = params;
  const variables = { slug };
  const { project } = await client.request(projectQuery, variables);
  return {
    project
  };
};
export {
  load
};
