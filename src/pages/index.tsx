import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'

import supabase from 'utils/supabase'

import Button from 'components/Button'
import Input from 'components/Input'
import Post from 'components/Post'

interface IProps { }

export const getStaticProps: GetStaticProps<IProps> = async () => ({
  props: {},
})

const Home = ({ }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="bg-gradient-to-l from-orange-400 to-orange-500 w-screen min-h-screen p-6 flex justify-center items-center">
    <div className="bg-white rounded-md p-6 w-full">
      <div className="flex justify-end">
        <Button className="" title="Регистрация" onClick={() => null} />
      </div>

      <form className="flex flex-col space-y-2">
        <h1 className="font-bold">Вход</h1>
        <Input name="test" label="Email" />
        <Input name="test" label="Пароль" />

        <div className="py-2" />
        <Button title="Войти" onClick={() => null} />
      </form>
    </div>
  </div>
)

export default Home
