import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import supabase from 'utils/supabase'

interface IProps {
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
    },
  }
}

const Home = ({
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    
  </>
)

export default Home
