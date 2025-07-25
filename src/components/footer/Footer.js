import React from "react";
import SanLogo from "../../assets/SanLogo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-last">
        <div className="last-item">
          <div className="item-sec">
            <ul>
              <h3>Quick Links</h3>
              <Link to="/" className="link-line">
                <li>Home</li>
              </Link>
              <Link to="/About Us" className="link-line">
                <li>About Us</li>
              </Link>
              <Link to="/AnimalCare" className="link-line">
                <li>AnimalCare</li>
              </Link>
              <Link to="/Contacts" className="link-line">
                <li>Contacts</li>
              </Link>
            </ul>
          </div>
          <div className="item-sec">
            <ul>
              <h3>Connect With Us</h3>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="item-sec">
            <ul>
              <h3>Support & Resources</h3>
              <Link to="/Volunteer" className="link-line">
                <li>Volunteer Info</li>
              </Link>
              <Link to="/Donate" className="link-line">
                <li>Donate</li>
              </Link>
              <Link to="/Events" className="link-line">
                <li>Join Us</li>
              </Link>
              <Link to="AnimalCare" className="link-line">
                <li>ReportAnimal</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="last-sec">
          <img src={SanLogo} alt="logo"/>
          <p>Sanrakshan</p>
        </div>
        <div className="footer-copy">
          <p>© 2025 Sanrakshan — Spreading Kindness & Hope.</p>
        </div>
      </div>
    </div>
  );
}