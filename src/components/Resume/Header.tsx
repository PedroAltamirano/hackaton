import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <div id="resume-header" className="resume-header">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 col-lg-8 col-xl-9 resume-title">
        <h2 className="resume-name mb-0 text-uppercase">Pedro Altamirano</h2>
        <h4 className="resume-tagline mb-3 mb-md-0">IT Engenner</h4>
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 resume-contact">
        <ul className="list-unstyled mb-0">
          <li className="mb-2">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="mr-2" />
            &nbsp;
            <a className="resume-link" href="#">
              +593 992979716
            </a>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2" />
            &nbsp;
            <a className="resume-link" href="#">
              pedroaal04@gmail.com
            </a>
          </li>
          <li className="mb-0">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="mr-2" />
            &nbsp;
            <a className="resume-link" href="#">
              Quito, Ecuador
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
