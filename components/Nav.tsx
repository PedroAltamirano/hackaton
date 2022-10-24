import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <Image src="/images/logo_100.png" loading="lazy" alt="logo" width={30} height={30}/>
            &nbsp;Pedro Altamirano
          </a>
          <button data-toggle="collapse" className="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-link js-scroll-trigger">
                <a className="nav-link js-scroll-trigger" href="#about">about</a>
              </li>
              <li className="nav-item nav-link js-scroll-trigger">
                <a className="nav-link js-scroll-trigger" href="#projects">projects</a>
              </li>
              <li className="nav-item nav-link js-scroll-trigger">
                <a className="nav-link js-scroll-trigger" href="#skills">skills</a>
              </li>
              <li className="nav-item nav-link js-scroll-trigger">
                <a className="nav-link js-scroll-trigger" href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Nav