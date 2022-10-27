import React from 'react'

const Projects = () => (
  <section id="projects" className="project-section py-3">
    <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
    <div id="item-project" className="item mb-3">
      <div className="item-heading row align-items-center mb-2 p-0">
        <h4 className="item-title col-12 col-md-6 col-md-8 mb-2 mb-md-0">
          servigraf
        </h4>
        <p className="item-meta col-12 col-md-6 col-md-4 text-muted text-left text-md-right m-0">
          Fullstack
        </p>
      </div>
      <div className="item-content">
        <p className="text-justify">
          Its an ERP (enterprise resource planner) the purpose of this program
          is to have a production management based on different modules that
          manage different parts of the company. Written in web technologies and
          using databases, the main purpose of the system is to provide detailed
          information on the production of each month, helping to make effective
          decisions.&nbsp;
          <strong>
            Written in html, css, javascript and php, it is an ERP system with
            modular architecture. It makes use of a mysql database mounted on a
            web server.&nbsp;For this project I developed both the frontend and
            the backend, in addition to putting it online doing the server
            configurations
          </strong>
        </p>
      </div>
    </div>
    <div id="item-project-5" className="item mb-3">
      <div className="item-heading row align-items-center mb-2 p-0">
        <h4 className="item-title col-12 col-md-6 col-md-8 mb-2 mb-md-0">
          colaboratorio
        </h4>
        <p className="item-meta col-12 col-md-6 col-md-4 text-muted text-left text-md-right m-0">
          Backend
        </p>
      </div>
      <div className="item-content">
        <p className="text-justify">
          This is a donation system generated for a foundation. The main
          function of the system is to store and present the requirements for
          these donations. The system makes use of the laravel framework and
          database, as well as integration with a payment button.&nbsp;
          <strong>
            Written in php using the laravel framework. In this project I
            developed a backend generating migrations, cruds and integration in
            the frontend.
          </strong>
        </p>
      </div>
    </div>
    <div id="item-project-4" className="item mb-3">
      <div className="item-heading row align-items-center mb-2 p-0">
        <h4 className="item-title col-12 col-md-6 col-md-8 mb-2 mb-md-0">
          joselito express
        </h4>
        <p className="item-meta col-12 col-md-6 col-md-4 text-muted text-left text-md-right m-0">
          Fullstack
        </p>
      </div>
      <div className="item-content">
        <p className="text-justify">
          It is a mobile delivery application that makes use of rest api. It
          consists of a mobile application and a web system designed for the
          complete administration of the application.The mobile application is
          created with the ionic framework, considering its portability, and its
          web system is created with laravel. It is written in ionic + angular
          for later compilation on android and ios. It makes use of native
          Cordova plugins and pulls information through the rest API. For the
          administrative part, Laravel and postgresql are used, the layout of
          the ui in ionic, implementation of functionality and reviews of
          functions in the admin. It should be noted that for this project a
          base template from both the mobile application and the web system was
          used.
        </p>
      </div>
    </div>
    <div id="item-project-3" className="item mb-3">
      <div className="item-heading row align-items-center mb-2 p-0">
        <h4 className="item-title col-12 col-md-6 col-md-8 mb-2 mb-md-0">
          innomaps
        </h4>
        <p className="item-meta col-12 col-md-6 col-md-4 text-muted text-left text-md-right m-0">
          Frontend
        </p>
      </div>
      <div className="item-content">
        <p className="text-justify">
          This is a web system focused on the prediction of administrative
          processes based on public information and processing it with AI and
          population maps. The system is built with node.js and implements
          artificial intelligence methods.&nbsp;
          <strong>
            It is developed with node.js and nunjucks. makes use of postgresql
            and postgis databases, layout with bootstrap studio and integration
            with backend functionalities, in addition to the development of
            statistical models.
          </strong>
        </p>
      </div>
    </div>
    <div id="item-project-2" className="item mb-3">
      <div className="item-heading row align-items-center mb-2 p-0">
        <h4 className="item-title col-12 col-md-6 col-md-8 mb-2 mb-md-0">
          made in yachay tech
        </h4>
        <p className="item-meta col-12 col-md-6 col-md-4 text-muted text-left text-md-right m-0">
          <strong>IT&nbsp;support</strong>
        </p>
      </div>
      <div className="item-content">
        <p className="text-justify">
          <strong>
            This is a web system for the presentation of internal projects of
            the yachay tech university. The application generated with flask
            makes use of a postgresql database and several libraries. For this
            project, an AWS EC2 instance was used, all the services were
            configured for the operation of the nginx server and postgresql
            database, as well as the implementation of the ssl certificate, and
            the configuration of the requirements for flask.
          </strong>
        </p>
      </div>
    </div>
  </section>
)

export default Projects
