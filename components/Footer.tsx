import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div className="banner-social-buttons d-flex justify-content-center mb-4">
          <a className="btn btn-primary btn-lg btn-default mx-2" role="button" href="https://www.facebook.com/pedro.altamirano.77" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} fixedWidth />
          </a>
          <a className="btn btn-primary btn-lg btn-default mx-2" role="button" href="https://www.instagram.com/altamiranopedro/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} fixedWidth />
          </a>
          <a className="btn btn-primary btn-lg btn-default mx-2" role="button" href="https://www.linkedin.com/in/pedro-altamirano/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
          </a>
          <a className="btn btn-primary btn-lg btn-default mx-2" role="button" href="https://github.com/PedroAltamirano" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>
        </div>
        <div className="container text-center">
          <p>Copyright ©&nbsp;Pedro Altamirano 2020</p>
        </div>
      </footer>
  )
}

export default Footer