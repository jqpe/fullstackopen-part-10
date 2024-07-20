import { useFormik } from 'formik'
import { StyleSheet, TextInput, View } from 'react-native'
import Button from '../Button'
import theme from '../../theme'

const initialValues = {
  username: '',
  password: '',
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 8,
    gap: 8,
  },
  input: {
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 2,
  },
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Button onPress={formik.handleSubmit} text="Sign in" />
    </View>
  )
}

export default SignInForm
