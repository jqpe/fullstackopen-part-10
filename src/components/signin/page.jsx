import { View } from 'react-native'
import SignInForm from './form'

const SignIn = () => {
  return (
    <View>
      <SignInForm onSubmit={formProps => alert(JSON.stringify(formProps))} />
    </View>
  )
}

export default SignIn
