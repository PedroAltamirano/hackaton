import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import IAbout from 'types/about'
import IProject from 'types/project'
import { ISkills } from 'types/skills'
import ILink from 'types/links'
import supabase from 'utils/supabase'

import About from 'components/Resume/About'
import Header from 'components/Resume/Header'
import Projects from 'components/Resume/Projects'
import Experience from 'components/Resume/Experience'
import Skills from 'components/Resume/Skills'
import Education from 'components/Resume/Education'
import Languages from 'components/Resume/Languages'
import Interests from 'components/Resume/Interests'
import Footer from 'components/Resume/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import IEducation from 'types/education'
import ILanguage from 'types/languages'
import IInterest from 'types/interests'
import { NAME } from 'constants/core'

interface IProps {
  about: IAbout
  projects: IProject[]
  skills: ISkills[]
  education: IEducation[]
  languages: ILanguage[]
  interests: IInterest[]
  links: ILink[]
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { data: about } = await supabase.from('about').select('*').single()
  const { data: projects } = await supabase.from('projects').select('*')
  const { data: skills } = await supabase.from('skills').select('*')
  const { data: education } = await supabase.from('education').select('*')
  const { data: languages } = await supabase.from('languages').select('*')
  const { data: interests } = await supabase.from('links').select('*')
  const { data: links } = await supabase.from('links').select('*')

  return {
    props: {
      about,
      projects,
      skills,
      education,
      languages,
      interests,
      links,
    },
  }
}

const Home: NextPage = ({
  about,
  projects,
  skills,
  education,
  languages,
  interests,
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{NAME}</title>
      <meta name="author" content={NAME} />
      <meta name="description" content={`${NAME} resume.`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="px-3 px-md-5 font-bold mx-auto p-5 my-5 shadow-lg">
      <Header about={about} />
      <hr />

      <About about={about} />
      <hr />

      <Row>
        <Col md={8} xl={9} className="pr-0 pr-md-5 resume-main">
          <Experience projects={projects} />
          <Projects />
        </Col>
        <div className="col-12 col-md-4 col-xl-3">
          <aside className="resume-aside px-md-4 pb-md-4">
            <Skills skills={skills} />
            <Education education={education} />
            <Languages languages={languages} />
            <Interests interests={interests} />
          </aside>
        </div>
      </Row>
      <hr />

      <Footer links={links} />
    </Container>
  </>
)

export default Home
