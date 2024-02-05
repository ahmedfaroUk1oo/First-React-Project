import React from 'react'
import errorImg from '../../error.webp';


export default function Error() {
  return (
    <>
   
      <section  >
        <div className="container  ">
          <div className="row ">
          <div className="col-md-6 m-auto ">
          <img src={errorImg} className='d-inline-block w-100'  alt=""  />
          </div>
          </div>
        </div>
      </section>
     
    </>
  )
}
