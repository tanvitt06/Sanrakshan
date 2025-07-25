import React, { useState } from 'react';
import {NavLink, useLocation, useSearchParams} from 'react-router-dom';
import SanLogo from '../../assets/SanLogo.png';
import './Header.css';

export default function Temp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const homePaths = ["/", "/Donate", "/Contribute", "/Awareness", "/Sponsor"];
  const isHomeActive = homePaths.includes(location.pathname)

  return (
      <div className='header-nav'>
        <div className='header-logo all-flex'>
          <img src={SanLogo} alt="sanrakshan logo"/>
          <p>Sanrakshan</p>
        </div>
        <div className={`header-links all-flex ${menuOpen? 'open': ''}`}>
          <NavLink to="/" end className={isHomeActive? "nav-link active": "nav-link"}>Home</NavLink>
          <NavLink to="/About Us" className="nav-link">About Us</NavLink>
          <NavLink to="/AnimalCare" className="nav-link">AnimalCare</NavLink>
          <NavLink to="/Events" className="nav-link">Events</NavLink>
          <NavLink to="/Volunteer" className="nav-link">Volunteer</NavLink>
          <NavLink to="/Contacts" className="nav-link last-link">Contacts</NavLink>  
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={()=>setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  );
}