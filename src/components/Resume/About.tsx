import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="resume-intro" className="resume-intro py-3">
      <div className="media flex-column flex-md-row align-items-center">
          <Image className="rounded-circle resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="/images/foto_sqr.jpeg" alt='profile' width={500} height={500} />
          <p className="text-justify mb-0">Information technology (IT) student at Yachay Tech, with a focus on data science. Currently a project developer for a startup, with the aim of becoming a project manager. In the area in which I have achieved the greatest development is the backend, in addition to IT support. Since all web systems are based on information, it is of great importance that all data collection, storage and compilation processes are efficient. In the area of ​​IT support, it is necessary that the system in which you work is reliable and does not present errors during its execution. I consider that my greatest quality is problem solving, as a developer my task is to simplify and modernize business processes. I am currently working as a developer, however my goal is to obtain a specialization in data science and thus develop solutions using new technologies such as AI prediction models.</p>
      </div>
  </div>
  )
}

export default About