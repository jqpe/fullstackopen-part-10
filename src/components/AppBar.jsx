import { View, StyleSheet, ScrollView, Text } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link } from 'react-router-native'
import { useApolloClient, useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'

const APP_BAR = {
  paddingHorizontal: 16,
  paddingVertical: 24,
  gap: 8,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + APP_BAR.paddingVertical,
    backgroundColor: theme.colors.appBar,
    paddingHorizontal: APP_BAR.paddingHorizontal,
    paddingVertical: APP_BAR.paddingVertical,
  },
  scrollContainer: {
    gap: APP_BAR.gap,
    flexDirection: 'row',
  },
  tabText: {
    color: theme.colors.appBarFg,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
})

const AppBarTab = props => {
  return (
    <Link to={props.path} onPress={props.onPress}>
      <Text style={styles.tabText}>{props.text}</Text>
    </Link>
  )
}

const AppBar = () => {
  const me = useQuery(ME)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab path="/" text="Repositories" />
        {me.data.me ? (
          <AppBarTab
            path="#signout"
            text="Sign out"
            onPress={async () => {
              await authStorage.removeAccessToken()
              await apolloClient.resetStore()
            }}
          />
        ) : (
          <AppBarTab path="/signin" text="Sign in" />
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
