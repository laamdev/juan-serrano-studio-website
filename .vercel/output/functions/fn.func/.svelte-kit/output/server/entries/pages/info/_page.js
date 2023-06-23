import { c as client, i as infoQuery } from "../../../chunks/graphql-queries.js";
const load = async () => {
  const { infos } = await client.request(infoQuery);
  return {
    info: infos[0]
  };
};
export {
  load
};
