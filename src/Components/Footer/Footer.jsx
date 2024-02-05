import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <section id='footer' className=' py-5 text-white'>
        <div className="container">
          <div className="row text-center py-4">
            <div className="col-md-4">
              <h2>LOCATION</h2>
              <p className='pt-3'>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
            <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
<div className="ICONS d-flex justify-content-center pt-3">
<i className="fa-brands fa-facebook-f me-3 px-3 py-2 border border-1 rounded-circle"></i>
<i className="fa-brands fa-twitter me-3 px-3 py-2 border border-1 rounded-circle"></i>
  <i className='fa-brands fa-linkedin-in me-3 px-3 py-2 border border-1 rounded-circle'></i>
  <i className="fa-solid fa-globe px-3 py-2 border border-1 rounded-circle"></i>
</div>
            </div>
            <div className="col-md-4">
              <h2>ABOUT FREELANCER</h2>
              <p className='pt-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dark py-4 text-center text-white' >
        <p className='p-0 m-0'>Copyright © Your Website 2024</p>
      </section>
    </>
  )
}
