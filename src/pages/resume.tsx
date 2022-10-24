import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
                        <div id="resume-header" className="resume-header">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6 col-lg-8 col-xl-9 resume-title">
                                    <h2 className="resume-name mb-0 text-uppercase">Pedro Altamirano</h2>
                                    <h4 className="resume-tagline mb-3 mb-md-0">IT Engenner</h4>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 resume-contact">
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-2">
                                            <FontAwesomeIcon icon={faPhoneAlt} size='lg' className='mr-2' />
                                            &nbsp;
                                            <a className="resume-link" href="#">+593 992979716</a>
                                        </li>
                                        <li className="mb-2">
                                            <FontAwesomeIcon icon={faEnvelope} size='lg' className='mr-2' />
                                            &nbsp;
                                            <a className="resume-link" href="#">pedroaal04@gmail.com</a>
                                        </li>
                                        <li className="mb-0">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' className='mr-2' />
                                            &nbsp;
                                            <a className="resume-link" href="#">Quito, Ecuador</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="resume-intro" className="resume-intro py-3">
                            <div className="media flex-column flex-md-row align-items-center">
                                <Image className="rounded-circle resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="/images/foto_sqr.jpeg" alt='profile' width={500} height={500} />
                                <p className="text-justify mb-0"><strong>Information technology (IT) student at Yachay Tech, with a focus on data science. Currently a project developer for a startup, with the aim of becoming a project manager. In the area in which I have achieved the greatest development is the backend, in addition to IT&nbsp;support.</strong><br /><strong>Since all web systems are based on information, it is of great importance that all data collection, storage and compilation processes are efficient. In the area of ​​IT&nbsp;support, it is necessary that the system in which you work is reliable and does not present errors during its execution.</strong><br /><strong>I consider that my greatest quality is problem solving, as a developer my task is to simplify and modernize business processes. I am currently working as a developer, however my goal is to obtain a specialization in data science and thus develop solutions using new technologies such as AI prediction models.</strong><br /></p>
                            </div>
                        </div>
                        <hr />
                        <div id="resume-body" className="resume-body">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5 resume-main">
                                    <section id="works" className="work-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-4">work experiences</h3>
                                        <div id="item-resume" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Freelancer developer</h4>
                                                <p className="m-0 p-0 item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">The webdit | 2020 - present</p>
                                            </div>
                                            <div className="item-content">
                                                <p className="mb-0">Full stack developer, project manager.Use of Laravel framework, web technologies developer, rest api, custom development, etc.<br /></p>
                                            </div>
                                        </div>
                                        <div id="item-resume-1" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Freelancer developer</h4>
                                                <p className="m-0 p-0 item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">ServiGraf | 2017 - present</p>
                                            </div>
                                            <div className="item-content">
                                                <p className="mb-0"><strong>Development of an Enterprise resource planner.</strong></p>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="projects" className="project-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
                                        <div id="item-project" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2 p-0">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">servigraf</h4>
                                                <p className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right m-0">Fullstack</p>
                                            </div>
                                            <div className="item-content">
                                                <p className="text-justify">Its an ERP (enterprise resource planner) the purpose of this program is to have a production management based on different modules that manage different parts of the company. Written in web technologies and using databases, the main purpose of the system is to provide detailed information on the production of each month, helping to make effective decisions.&nbsp;<strong>Written in html, css, javascript and php, it is an ERP system with modular architecture. It makes use of a mysql database mounted on a web server.&nbsp;For this project I developed both the frontend and the backend, in addition to putting it online doing the server configurations</strong></p>
                                            </div>
                                        </div>
                                        <div id="item-project-5" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2 p-0">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">colaboratorio</h4>
                                                <p className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right m-0">Backend</p>
                                            </div>
                                            <div className="item-content">
                                                <p className="text-justify">This is a donation system generated for a foundation. The main function of the system is to store and present the requirements for these donations. The system makes use of the laravel framework and database, as well as integration with a payment button.&nbsp;<strong>Written in php using the laravel framework. In this project I developed a backend generating migrations, cruds and integration in the frontend.</strong></p>
                                            </div>
                                        </div>
                                        <div id="item-project-4" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2 p-0">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">joselito express</h4>
                                                <p className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right m-0">Fullstack</p>
                                            </div>
                                            <div className="item-content">
                                                <p className="text-justify">It is a mobile delivery application that makes use of rest api. It consists of a mobile application and a web system designed for the complete administration of the application.The mobile application is created with the ionic framework, considering its portability, and its web system is created with laravel. It is written in ionic + angular for later compilation on android and ios. It makes use of native Cordova plugins and pulls information through the rest API. For the administrative part, Laravel and postgresql are used, the layout of the ui in ionic, implementation of functionality and reviews of functions in the admin. It should be noted that for this project a base template from both the mobile application and the web system was used.</p>
                                            </div>
                                        </div>
                                        <div id="item-project-3" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2 p-0">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">innomaps</h4>
                                                <p className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right m-0">Frontend</p>
                                            </div>
                                            <div className="item-content">
                                                <p className="text-justify">This is a web system focused on the prediction of administrative processes based on public information and processing it with AI and population maps. The system is built with node.js and implements artificial intelligence methods.&nbsp;<strong>It is developed with node.js and nunjucks. makes use of postgresql and postgis databases, layout with bootstrap studio and integration with backend functionalities, in addition to the development of statistical models.</strong></p>
                                            </div>
                                        </div>
                                        <div id="item-project-2" className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2 p-0">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">made in yachay tech</h4>
                                                <p className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right m-0"><strong>IT&nbsp;support</strong></p>
                                            </div>
                                            <div className="item-content">
                                                <p className="text-justify"><strong>This is a web system for the presentation of internal projects of the yachay tech university. The application generated with flask makes use of a postgresql database and several libraries. For this project, an AWS EC2 instance was used, all the services were configured for the operation of the nginx server and postgresql database, as well as the implementation of the ssl certificate, and the configuration of the requirements for flask.</strong></p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-12 col-lg-4 col-xl-3">
                                    <aside className="resume-aside px-lg-4 pb-lg-4">
                                        <section id="skills" className="skills-section py-3">
                                            <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
                                            <div id="item-skills" className="item">
                                                <h4 className="item-title mb-2">technical</h4>
                                                <ul className="list-unstyled resume-skills-list">
                                                    <li className="mb-2">Bootstrap</li>
                                                    <li className="mb-2">JavaScript/<strong>JQuery</strong></li>
                                                    <li className="mb-2">TypeScript</li>
                                                    <li className="mb-2">React/Vue</li>
                                                    <li className="mb-2">HTML/CSS</li>
                                                    <li className="mb-2">Python/PHP</li>
                                                    <li className="mb-2">Node</li>
                                                    <li className="mb-2">PostgreSQL/MySQL</li>
                                                    <li className="mb-2">MongosDB</li>
                                                    <li className="mb-2">Database design</li>
                                                    <li className="mb-2">Linux</li>
                                                    <li className="mb-2">nginx/apache</li>
                                                    <li>C/R</li>
                                                </ul>
                                            </div>
                                            <div id="item-skills-1" className="item">
                                                <h4 className="item-title mb-2">Professional</h4>
                                                <ul className="list-unstyled resume-skills-list">
                                                    <li className="mb-2">Adaptability</li>
                                                    <li className="mb-2">Team player</li>
                                                    <li className="mb-2">Strong problem solver</li>
                                                    <li className="mb-2">Disciplined</li>
                                                    <li>Growing in lidership</li>
                                                </ul>
                                            </div>
                                        </section>
                                        <section id="education" className="skills-section py-3">
                                            <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
                                            <ul className="list-unstyled resume-education-list">
                                                <li className="mb-3">
                                                    <div className="resume-degree font-weight-bold"><span>IT Engineering</span></div>
                                                    <div className="resume-degree-org text-muted"><span>Yachay Tech University</span></div>
                                                    <div className="resume-degree-time text-muted"><span>2015 - 2021</span></div>
                                                </li>
                                            </ul>
                                        </section>
                                        <section id="languages" className="skills-section py-3">
                                            <h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
                                            <ul className="list-unstyled resume-lang-list">
                                                <li className="mb-2">Spanish&nbsp;<span className="text-muted">(Native)</span></li>
                                                <li>English&nbsp;<span className="text-muted">(Advanced)</span></li>
                                            </ul>
                                        </section>
                                        <section id="interests" className="skills-section py-3">
                                            <h3 className="text-uppercase resume-section-heading mb-4"><strong>INTERESTS</strong></h3>
                                            <ul className="list-unstyled resume-interests-list mb-0">
                                                <li className="mb-2">Music</li>
                                                <li className="mb-2">Gamming</li>
                                                <li>Augmented Reality</li>
                                            </ul>
                                        </section>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="resume-footer" className="resume-footer text-center">
                            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                                <li className="list-inline-item mb-lg-0 mr-3">
                                    <a className="resume-link" href="https://github.com/PedroAltamirano" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithubSquare} size='sm' className='mr-2' />
                                        github.com/PedroAltamirano
                                    </a>
                                </li>
                                <li className="list-inline-item mb-lg-0 mr-3">
                                    <a className="resume-link" href="https://www.linkedin.com/in/pedro-altamirano/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size='sm' className='mr-2' />
                                        linkedin.com/in/pedro-altamirano
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <footer className="footer text-center py-4"><small className="copyright text-muted">Copyright ©&nbsp;Pedro Altamirano 2020</small></footer>
                </div>
            </div>

        </>
    )
}

export default Home
