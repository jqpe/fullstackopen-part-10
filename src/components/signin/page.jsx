import { View } from 'react-native'
import SignInForm from './Form'
import { useSignIn } from '../../hooks/useSignIn'

const SignIn = () => {
  const [signIn, res] = useSignIn()

  console.log(res.data);

  return (
    <View>
      <SignInForm onSubmit={signIn} />
    </View>
  )
}

export default SignIn
