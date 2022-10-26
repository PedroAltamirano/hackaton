import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import Header from 'components/Home/Header'
import About from 'components/Home/About'
import Contact from 'components/Home/Contact'
import Footer from 'components/Home/Footer'
import Navigation from 'components/Home/Navigation'
import Projects from 'components/Home/Projects'
import Skills from 'components/Home/Skills'
import supabase from 'utils/supabase'
import ILink from 'types/links'
import IProject from 'types/project'
import IAbout from 'types/about'
import { ISkillsCats } from 'types/skills'

interface IProps {
  about: IAbout
  projects: IProject[]
  skillsCats: ISkillsCats[]
  links: ILink[]
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { data: about } = await supabase.from('about').select('*').single()
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .gt('importance', 0)
    .order('importance', { ascending: true })
    .limit(3)
  const { data: skillsCats } = await supabase
    .from('skill-category')
    .select(
      `
    id,
    name,
    created_at,
    updated_at,
    skills (
      name,
      id,
      created_at,
      updated_at,
      name,
      icon,
      isHard,
      isSoft
    )
  `
    )
    .order('id')
  const { data: links } = await supabase.from('links').select('*')

  return {
    props: {
      about,
      projects,
      skillsCats,
      links,
    },
  }
}

const Home: NextPage = ({
  about,
  projects,
  skillsCats,
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Pedro Altamirano</title>
      <meta name="author" content="Pedro Altamirano" />
      <meta
        name="description"
        content="Pedro Altamirano personal portfolio and resume."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navigation />

    <Header />

    <About about={about} />

    <Projects projects={projects} />

    <Skills skillsCats={skillsCats} />

    <Contact />

    <Footer links={links} />
  </>
)

export default Home
