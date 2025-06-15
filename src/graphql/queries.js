import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          description
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
          ownerName
          language
        }
      }
    }
  }
`

export const ME = gql`
  {
    me {
      id
      username
    }
  }
`
