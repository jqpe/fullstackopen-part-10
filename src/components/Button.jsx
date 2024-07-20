import { Pressable, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Button = ({ text, ...props }) => {
  return (
    <Pressable {...props} style={[styles.primaryButton, props.style]}>
      <Text color="primaryFg" style={styles.primaryButtonText}>
        {text}
      </Text>
    </Pressable>
  )
}

export default Button
