import React from 'react';
import logo from '../../avataaars.svg';
import './Home.css'

export default function Home() {
  return (
    <>
      <section className='py-5 d-flex align-items-center' id='home'>
        <div className="container  text-center">
       <div className="row w-100 m-auto d-flex flex-column align-content-center">
        <div className="col-md-6">
          <img src={logo} alt="avatar" className='w-50' />
        </div>
        <div className="col-md-6 text-white ">
          <h1 className='pt-5 fw-bold'>START FRAMEWORK</h1>
          <div className="icon">
            <div id='line' className='bg-white rounded-2 me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div id='line' className='bg-white rounded-2 ms-3'></div>
          </div>
          <p className='pt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
       </div>
        </div>
      </section>
    </>
  )
}
