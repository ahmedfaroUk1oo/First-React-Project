import React, { useState } from 'react'
import './Portfolio.css'
const images = require.context('../../Assets/images', true);
const imageList = images.keys().map(image => images(image));

export default function Portfolio() {


  const [src,setSrc] = useState("");
  const [display,setDisplay] = useState('d-none')

function handleImg(list) {
  setSrc(`${list}`);
  setDisplay('d-flex')
}

const exitPage = (e) => {
  setDisplay('d-none');
}

const stopprog = (e) => {
  e.stopPropagation();
}

  return (
    <>
      <section className='py-5'>
      <div className="container text-center">
        <h1 className='fw-bold '>PORTFOLIO COMPONENT</h1>
          <div className="icon">
            <div id='line' className='bg-dark rounded-2 me-3 '></div>
            <i className="fa-solid fa-star"></i>
            <div id='line' className='bg-dark rounded-2 ms-3'></div>
          </div>
          <div className="row py-4 g-3">
            {imageList.map((list,index)=> (
              <div key={index} className="col-md-4 img-section   " onClick={()=> handleImg(list)}>
                <div className="images position-relative " >
                <img  src={list} className='w-100 rounded-3'  alt=""   />
                <div className="layout position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white "></i>
                </div>
                </div>
              </div>
            ))}
            {imageList.map((list,index)=> (
              <div key={index} className="col-md-4 img-section   " onClick={()=> handleImg(list)}>
                <div className="images position-relative " >
                <img  src={list} className='w-100 rounded-3'  alt=""   />
                <div className="layout position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white "></i>
                </div>
                </div>
              </div>
            ))}
          
          </div>
          </div>
      </section>

      <section id='slide' className={`position-fixed top-0 start-0 end-0 bottom-0 ${display}`} onClick={exitPage}>
        <div className="container  ">
          <div className="row ">
          <div className="col-md-6 m-auto ">
          <img src={src} className='d-inline-block w-100'  alt="" onClick={stopprog} />
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
