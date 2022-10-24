import type { NextPage } from 'next'
import Head from 'next/head'

import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pedro Altamirano</title>
        <meta name="author" content="Pedro Altamirano" />
        <meta name="description" content="Pedro Altamirano personal portfolio and resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>

      <header className="masthead" style={{backgroundImage: "url('/fondo_code_bk.jpg')"}}>
        <div className="intro-body">
          <div className="container">
            <h1 className="brand-heading text text-center h1  font-ps" data-period="2000" data-type="['<CODE>', '<PEDRO ALTAMIRANO>']"></h1>
          </div>
        </div>
      </header>

      <About/>

      <Projects/>

<Skills/>

<Contact/>
      
      <Footer/>
    </>
  )
}

export default Home
