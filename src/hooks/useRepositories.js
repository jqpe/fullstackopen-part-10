import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

export const useRepositories = () => {
  const query = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' })

  return {
    repositories: query.data?.repositories,
    loading: query.loading,
    refetch: query.refetch,
  }
}
