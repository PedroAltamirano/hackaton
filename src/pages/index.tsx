import type { NextPage } from 'next'
import Head from 'next/head'

import Header from 'components/Home/Header'
import About from 'components/Home/About'
import Contact from 'components/Home/Contact'
import Footer from 'components/Home/Footer'
import Navigation from 'components/Home/Navigation'
import Projects from 'components/Home/Projects'
import Skills from 'components/Home/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pedro Altamirano</title>
        <meta name="author" content="Pedro Altamirano" />
        <meta name="description" content="Pedro Altamirano personal portfolio and resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Header />

      <About />

      <Projects />

      <Skills />

      <Contact />

      <Footer />
    </>
  )
}

export default Home
