import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className='font-ps'>About me</h2>
              <p className="m-0">Information technology (IT) student at Yachay Tech, with a focus on data science.
                Currently a project developer for a startup, with the aim of becoming a project manager. In the
                area in which I have achieved the greatest development is the backend, in addition to IT
                support.</p>
                <Link className="btn btn-outline-primary my-4" href="resume">resume</Link>
            </div>
          </div>
          <Image className="img-fluid mb-3" src="/images/fondo_code_little.png" alt="about-me" width={500} height={500}/>
        </div>
      </section>
  )
}

export default About