import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <section id="contact" className="contact-section text-center bg-light">
        <div className="container">
          <h2 className="text-dark font-ps">contact me</h2>
          <div className="row">
            <div className="col-12 col-md-7">
              <form data-bss-recipient="bfa0baa54292900125e76f51a7a0e726" data-bss-subject="CONTACT MAIL">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name" name="name" required minLength={10} maxLength={50}/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email" required minLength={10} maxLength={50} inputMode="email"/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={4} placeholder="Write your message"
                  required minLength={10} maxLength={250}></textarea>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary active btn-lg" type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-5 mx-auto">
              <div className="card mb-4 d-none">
                <div className="card-body text-center">
                  <h4 className="card-title text-dark">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='test-primary' />
                    &nbsp;Address
                  </h4>
                  <hr className="my-4"/>
                  <p className="card-text small text-black-50">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h4 className="card-title text-dark">
                    <FontAwesomeIcon icon={faEnvelope} className='test-primary' />
                    &nbsp;EMAIL
                  </h4>
                  <hr className="my-4"/>
                    <p className="card-text small text-black-50">pedroaal04@gmail.com</p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h4 className="card-title text-dark">
                    <FontAwesomeIcon icon={faMobileAlt} className='test-primary' />
                    &nbsp;Phone
                  </h4>
                  <hr className="my-4"/>
                    <p className="card-text small text-black-50">+593 992979716</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact