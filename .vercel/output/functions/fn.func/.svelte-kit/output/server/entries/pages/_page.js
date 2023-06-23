import { c as client, h as homePageQuery } from "../../chunks/graphql-queries.js";
const load = async () => {
  const { homePages } = await client.request(homePageQuery);
  return {
    homePages
  };
};
export {
  load
};
