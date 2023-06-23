import { GraphQLClient, gql } from "graphql-request";
const HYGRAPH_ENDPOINT = "https://eu-central-1.cdn.hygraph.com/content/ckwaq7sbm2isa01xpethyhyqq/master";
const client = new GraphQLClient(HYGRAPH_ENDPOINT);
const projectQuery = gql`
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			title
			slug
			year
			images {
				alt
				url(transformation: { document: { output: { format: webp } } })
			}
			description
			materials
			year
			price
			stock
		}
	}
`;
const homePageQuery = gql`
	query GetHomePage {
		homePages(first: 1) {
			featuredProjects {
				description
				id
				images(first: 1) {
					alt
					url(transformation: { document: { output: { format: webp } } })
				}
				title
				slug
				year
			}
		}
	}
`;
const infoQuery = gql`
	query GetInfo {
		infos {
			about {
				id
				ownerBio {
					html
				}
				ownerName
				ownerPicture {
					alt
					url(transformation: { document: { output: { format: webp } } })
				}
			}
		}
	}
`;
const contactQuery = gql`
	query GetContact {
		infos {
			contact {
				email
				phone
				instagram
				image {
					alt
					url(transformation: { document: { output: { format: webp } } })
				}
			}
		}
	}
`;
gql`
	query GetProjectMetadatas {
		projectMetadatas {
			name
			siteUrl
			description
			openGraphDefaultImage {
				url(transformation: { image: { resize: { width: 1200, height: 630, fit: clip } } })
			}
		}
	}
`;
export {
  contactQuery as a,
  client as c,
  homePageQuery as h,
  infoQuery as i,
  projectQuery as p
};
