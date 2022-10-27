import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'

import IEducation from 'types/education'
import ILanguage from 'types/languages'
import IInterest from 'types/interests'
import IAbout from 'types/about'
import IProject from 'types/project'
import { ISkill } from 'types/skills'
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
import IExperience from 'types/experience'

interface IProps {
  about: IAbout
  experience: IExperience[]
  projects: IProject[]
  skills: ISkill[]
  education: IEducation[]
  languages: ILanguage[]
  interests: IInterest[]
  links: ILink[]
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { data: about } = await supabase.from('about').select('*').single()
  const { data: experience } = await supabase.from('experience').select('*')
  const { data: projects } = await supabase.from('projects').select('*')
  const { data: skills } = (await supabase.from('skills').select('*')) || []
  const { data: education } = await supabase.from('education').select('*')
  const { data: languages } = await supabase.from('languages').select('*')
  const { data: interests } = await supabase.from('interests').select('*')
  const { data: links } = await supabase.from('links').select('*')

  return {
    props: {
      about: about as IAbout,
      experience: experience as IExperience[],
      projects: projects as IProject[],
      skills: skills as ISkill[],
      education: education as IEducation[],
      languages: languages as ILanguage[],
      interests: interests as IInterest[],
      links: links as ILink[],
    },
  }
}

const Resume = ({
  about,
  experience,
  projects,
  skills,
  education,
  languages,
  interests,
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{about.name}</title>
      <meta name="author" content={about.name} />
      <meta name="description" content={`${about.name} resume.`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="px-3 px-md-5">
      <Container className="py-5 px-3 px-md-5 mx-auto my-5 font-bold shadow-lg">
        <Header about={about} />
        <hr />

        <About about={about} />
        <hr />

        <Row>
          <Col md={8} xl={9} className="pr-0 pr-md-5 resume-main">
            <Experience experience={experience} />
            <Projects projects={projects} />
          </Col>
          <Col md={4} xl={3}>
            <aside className="px-md-4 pb-md-4">
              <Skills skills={skills} />
              <Education education={education} />
              <Languages languages={languages} />
              <Interests interests={interests} />
            </aside>
          </Col>
        </Row>
        <hr />

        <Footer about={about} links={links} />
      </Container>
    </Container>
  </>
)

export default Resume
