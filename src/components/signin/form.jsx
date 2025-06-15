import { useFormik } from 'formik'
import { StyleSheet, TextInput, View } from 'react-native'
import Button from '../Button'
import theme from '../../theme'

import * as yup from 'yup'
import Text from '../Text'

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

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
  invalidInput: {
    borderColor: theme.colors.danger,
  },
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  })

  const username = {
    error: formik.touched.username && formik.errors.username,
  }

  const password = {
    error: formik.touched.password && formik.errors.password,
  }

  return (
    <View style={styles.form}>
      <TextInput
        autoCapitalize="none"
        style={[styles.input, username.error && styles.invalidInput]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {username.error && <Text color="danger">{username.error}</Text>}

      <TextInput
        autoCapitalize="none"
        style={[styles.input, password.error && styles.invalidInput]}
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {password.error && <Text color="danger">{password.error}</Text>}

      <Button onPress={formik.handleSubmit} text="Sign in" />
    </View>
  )
}

export default SignInForm
