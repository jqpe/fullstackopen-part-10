import { View } from 'react-native'
import SignInForm from './Form'

const SignIn = () => {
  return (
    <View>
      <SignInForm onSubmit={formProps => alert(JSON.stringify(formProps))} />
    </View>
  )
}

export default SignIn
