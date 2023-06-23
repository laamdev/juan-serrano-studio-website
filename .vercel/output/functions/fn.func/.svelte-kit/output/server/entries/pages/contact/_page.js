import { c as client, a as contactQuery } from "../../../chunks/graphql-queries.js";
const load = async () => {
  const { infos } = await client.request(contactQuery);
  return {
    info: infos[0]
  };
};
export {
  load
};
