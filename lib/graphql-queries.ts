import { gql } from "graphql-request"

export const projectQuery = gql`
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
`

export const homePageQuery = gql`
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
`

export const bioQuery = gql`
  query GetBio {
    infos {
      about {
        id
        ownerBio {
          raw
        }
        ownerName
        ownerPicture {
          alt
          url(transformation: { document: { output: { format: webp } } })
        }
      }
    }
  }
`

export const contactQuery = gql`
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
`

export const siteMetadataQuery = gql`
  query GetProjectMetadatas {
    projectMetadatas {
      name
      siteUrl
      description
      openGraphDefaultImage {
        url(
          transformation: {
            image: { resize: { width: 1200, height: 630, fit: clip } }
          }
        )
      }
    }
  }
`
