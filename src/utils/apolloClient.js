import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Constants from 'expo-constants'

const httpLink = createHttpLink({
  uri: Constants.expoConfig.extra.apolloUri,
})

const createApolloClient = authStorage => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      }
    } catch (e) {
      console.log(e)
      return {
        headers,
      }
    }
  })
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
