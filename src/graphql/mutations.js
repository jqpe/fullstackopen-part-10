import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation ($password: String!, $username: String!) {
    authenticate(credentials: { password: $password, username: $username }) {
      accessToken
    }
  }
`
