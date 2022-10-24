import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
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
                        <footer className="footer text-center py-4"><small className="copyright text-muted">Copyright ©&nbsp;Pedro Altamirano 2020</small></footer>
    </>
  )
}

export default Footer