import Button from 'components/Button'
import Input from 'components/Input'
import { useState, useEffect } from 'react'
import supabase from 'utils/supabase'
import useAuthStore from 'store/authStore'

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('Email не может быть пустым.')
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым.'
  )
  const saveUser = useAuthStore((state) => state.saveUser)

  const emailHandler = (e) => {
    const re = RegExp('^[w-.]+@([w-]+.)+[w-]{2,4}$')
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Неверный формат')
      return
    } else {
      setEmailError('')
      return
    }
    setEmail(e.target.value)
  }

  const passwordHandler = () => {
    setPassword(e.target.value)
  }

  const checkEmail = async () => {
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
    if (userError) {
      setPasswordError('Email not found.')
      return
    }
  }

  const checkEmailPassword = async () => {
    const { data: userPwdData, error: userPwdError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password)
    if (userPwdError) {
      setPasswordError('Incorrect password.')
      return
    }
    saveUser(userPwdData)
  }

  useEffect(() => {
    if (email) {
      checkEmail()
    }
    if (email && password) {
      checkEmailPassword()
    }
  }, [email, password])

  return (
    <div className="bg-gradient-to-l from-orange-400 to-orange-500 w-screen min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white rounded-md p-6 w-full">
        <div className="flex justify-end">
          <Button title="Регистрация" onClick={() => null} />
        </div>

        <form onSubmit={() => null} className="flex flex-col space-y-2">
          <h1 className="font-bold">Вход</h1>
          <Input
            name="email"
            label="Email"
            error={emailError}
            onChange={emailHandler}
          />
          <Input
            name="password"
            label="Пароль"
            error={passwordError}
            onChange={passwordHandler}
          />

          <div className="py-2" />
          <Button title="Войти" onClick={() => null} />
        </form>
      </div>
    </div>
  )
}

export default Home
