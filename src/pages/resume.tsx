import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/Resume/About'
import Header from '../components/Resume/Header'
import Projects from '../components/Resume/Projects'
import Experience from '../components/Resume/Experience'
import Skills from '../components/Resume/Skills'
import Education from '../components/Resume/Education'
import Languages from '../components/Resume/Languages'
import Interests from '../components/Resume/Interests'
import Footer from '../components/Resume/Footer'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pedro Altamirano</title>
                <meta name="author" content="Pedro Altamirano" />
                <meta name="description" content="Pedro Altamirano personal portfolio and resume." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="main-wrapper">
                <div className="container px-3 px-lg-5 font-bold">
                    <article className="resume-wrapper mx-auto theme-bg-light p-5 mt-5 shadow-lg">
                        <Header/>
                        <hr />
                        <About/>
                        <hr />
                        <div id="resume-body" className="resume-body">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5 resume-main">
                                    <Experience/>
                                    <Projects/>
                                </div>
                                <div className="col-12 col-lg-4 col-xl-3">
                                    <aside className="resume-aside px-lg-4 pb-lg-4">
                                        <Skills/>
                                        <Education/>
                                        <Languages/>
                                        <Interests/>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <Footer/>
                    </article>
                </div>
            </div>

        </>
    )
}

export default Home
