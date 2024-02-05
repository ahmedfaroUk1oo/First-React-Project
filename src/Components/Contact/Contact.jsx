import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {


  const [shadow ,setShadow] = useState('');
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');


  const shadowNone = () => {
    setShadow('shadow-none')
  }


  const handleChange = (event) => {

if(event.target.value.length >0) {
  if(event.target.id ==='username') {
    setName('top-0');
  }else if (event.target.id ==='userage') {
    setAge('top-0');
  }else if(event.target.id ==='useremail') {
    setEmail('top-0');
  }else if(event.target.id ==='password') {
    setPass('top-0');
  }
}else if(event.target.value.length <=0){
  setName('');
  setAge('');
  setEmail('');
  setPass('');
}
// if(event.target.value.length > 0) {
//   setTop('top-0');
// }else if (event.target.value.length ===0) {
//   setTop('');
  
// }


  };


  return (
    <>
      <section className='py-5' id='contact'>
        <div className="container text-center">
        <h1 className='fw-bold '>CONATCT SECTION</h1>
          <div className="icon">
            <div id='line' className='bg-dark rounded-2 me-3 '></div>
            <i className="fa-solid fa-star"></i>
            <div id='line' className='bg-dark rounded-2 ms-3'></div>
          </div>
          <div className="row py-5 d-flex flex-column   ">
            <div className="col-md-6 m-auto mb-4 text-start  ">
              <label htmlFor="username" className={`text-success position-relative ${name}`}>User Name :</label>
              <input id='username' type="text" onFocus={shadowNone}   onInput={handleChange} className={`form-control w-100 m-auto p-3 border-0 border-bottom border-1 ${shadow}`}  placeholder='userName...' />
            </div>
            <div className="col-md-6 m-auto mb-4 text-start  ">
              <label htmlFor="userage" className={`text-success position-relative ${age}`}>User Age :</label>
              <input id='userage' type="text" onFocus={shadowNone}   onInput={handleChange} className={`form-control w-100 m-auto p-3 border-0 border-bottom border-1 ${shadow}`}  placeholder='userAge...' />
            </div>
            <div className="col-md-6 m-auto mb-4 text-start  ">
              <label htmlFor="useremail" className={`text-success position-relative ${email}`}>User Email :</label>
              <input id='useremail' type="text" onFocus={shadowNone}   onInput={handleChange} className={`form-control w-100 m-auto p-3 border-0 border-bottom border-1 ${shadow}`}  placeholder='userEmail...' />
            </div>
            <div className="col-md-6 m-auto mb-4 text-start  ">
              <label htmlFor="password" className={`text-success position-relative ${pass}`}>User password :</label>
              <input id='password' type="text" onFocus={shadowNone}   onInput={handleChange} className={`form-control w-100 m-auto p-3 border-0 border-bottom border-1 ${shadow}`}  placeholder='userpassword...' />
            </div>
            <div className="col-md-6 m-auto text-start">
            <button className='btn text-white p-2'>Send Message</button>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
