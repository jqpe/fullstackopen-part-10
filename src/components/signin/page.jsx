import { View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useSignIn } from '../../hooks/useSignIn'
import SignInForm from './Form'

const SignIn = () => {
  const navigate = useNavigate()
  const [signIn] = useSignIn()

  return (
    <View>
      <SignInForm
        onSubmit={async formProps => {
          const result = await signIn(formProps)

          if (result.data?.authenticate.accessToken) {
            navigate({ pathname: '/' })
          }
        }}
      />
    </View>
  )
}

export default SignIn
