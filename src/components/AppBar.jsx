import { View, StyleSheet, Pressable, Text } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'

const APP_BAR = {
  paddingHorizontal: 16,
  paddingVertical: 24,
  gap: 8,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + APP_BAR.paddingVertical,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
    paddingHorizontal: APP_BAR.paddingHorizontal,
    paddingVertical: APP_BAR.paddingVertical,
    gap: APP_BAR.gap,
  },
  tabText: {
    color: theme.colors.appBarFg,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
})

const AppBarTab = props => {
  return (
    <Pressable>
      <Text style={styles.tabText}>{props.text}</Text>
    </Pressable>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  )
}

export default AppBar
