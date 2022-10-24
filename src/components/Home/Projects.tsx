import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects-section bg-light">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-lg-7 col-xl-8">
              <a href="https://www.servigraf.me/">
                <Image className="img-fluid mb-3 mb-lg-0" alt="main-proyect" src="/images/fondo_servigraf.jpeg" width={500} height={500}/>
              </a>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-dark project-heading font-ps">ServiGraf</h4>
                <p className="text-black-50 mb-0">It's an ERP (enterprise resource planner) the purpose of this
                  program is to have a production management based on different modules that manage different
                  parts of the company. Written in web technologies and using databases, the
                  main&nbsp;<strong>feature</strong>&nbsp;of the system is to provide detailed information on
                  the production of each month, helping to make effective decisions.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <a href="https://colaboratoriociudadano.org">
                <Image className="img-fluid" alt="project-1" src="/images/fondo_colaboratorio.jpeg" width={500} height={500}/>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 projects">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white mb-2 project-heading font-ps font-24">Colaboratorio</h4>
                    <p className="mb-0 text-white-50"><strong>This is a donation system. The main function of
                      the system is to store and present data for donations. The system use laravel
                      and postgresql, as well as integration with a payment button.</strong></p>
                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <a href="https://joselitoexpress.com">
                <Image className="img-fluid" alt="project-1" src="/images/fondo_joselito.jpeg" width={500} height={500}/>
              </a>
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 projects">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white mb-2 project-heading font-ps">joselitoexpress</h4>
                    <p className="mb-0 text-white-50"><strong>It is a mobile delivery application that makes use
                      of rest api. The apps administration is made by a web system. The mobile
                      application is created with the ionic, and its web system is created with
                      laravel.</strong><br/></p>
                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects