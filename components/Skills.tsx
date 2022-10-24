import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faCss3Alt, faJs, faReact, faLaravel, faNodeJs, faLinux, faPython } from "@fortawesome/free-brands-svg-icons"

const Skills = () => {
  return (
    <section id="skills" className="skills-section bg-light text-center" style={{backgroundImage: "url('/images/fondo_code_bk.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className=' font-ps'>Skills</h1>
            </div>
          </div>
          <div className="row align-items-center no-gutters">
            <div className="col-6 col-lg-3 text-center p-3">
              <div>
                <FontAwesomeIcon icon={faHtml5} size='sm' className='mr-2' />
                <FontAwesomeIcon icon={faCss3Alt} size='sm' className='mr-2' />
                <FontAwesomeIcon icon={faJs} size='sm' />
              </div>
              <h6 className="item-title my-2">Frontend</h6>
              <p className="m-0 p-0">HTML, CSS, JavaScript, JQuery</p>
            </div>
            <div className="col-6 col-lg-3 text-center p-3">
              <div>
                <FontAwesomeIcon icon={faReact} size='sm' className='mr-2' />
                <FontAwesomeIcon icon={faLaravel} size='sm' className='mr-2' />
                <FontAwesomeIcon icon={faDatabase} size='sm' className='mr-2' />
                <FontAwesomeIcon icon={faNodeJs} size='sm' />
              </div>
              <h6 className="item-title my-2">Backend</h6>
              <p className="m-0 p-0">PHP, SQL, NODE</p>
            </div>
            <div className="col-6 col-lg-3 text-center p-3">
              <div>
                <FontAwesomeIcon icon={faLinux} size='sm' />
              </div>
              <h6 className="item-title my-2">IT&nbsp;<strong>Support</strong></h6>
              <p className="m-0 p-0">Linux, nginx, apache</p>
            </div>
            <div className="col-6 col-lg-3 text-center p-3">
              <div>
                <FontAwesomeIcon icon={faPython} size='sm' />
              </div>
              <h6 className="item-title my-2">Programming</h6>
              <p className="m-0 p-0">Python, C</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills