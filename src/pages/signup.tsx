import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import supabase from 'utils/supabase'

import Button from 'components/Button'
import Input from 'components/Input'

interface IProps { }

export const getStaticProps: GetStaticProps<IProps> = async () => ({
  props: {},
})

const SignUp = ({ }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="bg-gradient-to-l from-orange-400 to-orange-500 w-screen min-h-screen p-6 flex justify-center items-center">
    <div className="bg-white rounded-md p-6 w-full">
      <div className="flex justify-end">
        <Button title="Войти" onClick={() => null} />
      </div>

      <form className="flex flex-col space-y-2">
        <h1 className="font-bold">Регистрация</h1>
        <Input name="test" label="Фамилия" />
        <Input name="test" label="Имя" />
        <Input name="test" label="Компания (для работодателей)" />
        <Input name="test" label="Email" />
        <Input name="test" label="Пароль" />

        <div className="py-2" />
        <Button title="Зарегистрироваться" onClick={() => null} />
      </form>
    </div>
  </div>
)

export default SignUp
