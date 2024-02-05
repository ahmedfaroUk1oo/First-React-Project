import React, { useEffect, useState } from 'react'
import { Link ,NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

  let [scrolling,setScrolling] = useState(false) ;

useEffect (()=>{
window.addEventListener('scroll' , handleScroll);
return () => window.removeEventListener('scroll',handleScroll);
},[])

 const handleScroll = () =>{
  if(window.scrollY > 50) {
    setScrolling(true);
  }else {
    setScrolling(false)
  }
 }

 const [isNavCollapsed, setIsNavCollapsed] = useState(true);

 const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
<nav className={`navbar navbar-expand-lg  position-sticky top-0 padding  ${scrolling? 'navbar-scroll' : ''}`}>
 <div className="container">
 <Link className="navbar-brand fs-3 fw-bold text-white" to="">START FRAMEWORK</Link>

<button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
  <span className="navbar-toggler-icon"></span>
</button>

<div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse `} id="navbarsExample09">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  <li className="nav-item me-2">
  <NavLink className="nav-link text-white rounded-2 fw-bold " to={'about'} >ABOUT </NavLink>
  </li>
  <li className="nav-item me-2 ">
  <NavLink className="nav-link text-white rounded-2 fw-bold " to ={'portfolio'}>PORTFOLIO</NavLink>
</li>
<li className="nav-item me-2 ">
  <NavLink className="nav-link text-white rounded-2 fw-bold " to ={'contact'}>CONTACT</NavLink>
</li>
</ul>
</div>
 </div>
    </nav>

    </>
  )
}
