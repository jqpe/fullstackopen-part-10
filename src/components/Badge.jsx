import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
})

const Badge = ({ text }) => {
  return (
    <View style={styles.badge}>
      <Text color="primaryFg" fontSize="caption">
        {text}
      </Text>
    </View>
  )
}

export default Badge
