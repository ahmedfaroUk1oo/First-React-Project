import React from 'react';
import './About.css'

export default function About() {
  return (
    <>
      <section className='py-5  d-flex align-items-center' id='about'>
        <div className="container  text-center text-white">
          <h1 className='fw-bold '>ABOUT COMPONENT</h1>
          <div className="icon">
            <div id='line' className='bg-white rounded-2 me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div id='line' className='bg-white rounded-2 ms-3'></div>
          </div>
          <div className="row pt-4">
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
