import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

    const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <div className="logoBox">
              <img src={logo} alt="logo" />
              <h2>OCTADYNA</h2>
            </div>
            <p className="ft-description">
               Octodyna helps brands grow through powerful digital strategy, creative storytelling, and modern communication solutions. We partner with startups and enterprises to build clarity,credibility, and long-term impact.
            </p>
          </div>

          {/* <SubscribeNewsletter /> */}
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li><a href="#services">Brand Strategy</a></li>
            {/* <li><a href="#services">Digital Marketing</a></li> */}
            <li><a href="#services">PR & Media Outreach</a></li>
            <li><a href="#services">Content & Storytelling</a></li>
            <li><a href="#services">Growth Consulting</a></li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"#service"}>General Info</Link>
           </li>
           <ul className="ft-list-items">
           <li><Link to={"#service"}>Privacy</Link></li>
           <li><Link to={"#service"}>Cookies</Link></li>
           <li><Link to={"#service"}>GDPR Compliance</Link></li>
           {/* <li><Link to={"#service"}>Security</Link></li> */}
         </ul>
         </ul>
        </div>

        {/* <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:info@octadyna.com">info@octadyna.com</a>
            </li>
          </ul>
        </div> */}

        <div className="ft-list" id="contact">
  <p className="ft-list-title">Talk To Us</p>

  <div className="contact-column">

    <a href="mailto:info@octadyna.com" className="contact-email">
      info@octadyna.com
    </a>

          <button className="footer-schedule-btn"
          onClick={handleBookAppointmentClick}
           >
         <FontAwesomeIcon icon={faCalendarCheck} />
          Schedule a Call
         </button>
         </div>
        </div>
        
      </div>

      <div className="ft-copyright">
        <p>© 2026 Octodyna. All rights reserved.</p>
        <ul className="ft-social-links">
          <li>
            <a
              href="https://www.linkedin.com/company/octadyna/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/share/1CNmN3xYxM/"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
  <a
    href="https://x.com/Octadyna11831/"
    title="X (Twitter)"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M389.2 48h70.6L302.6 224.2 480 464H337.3L229.7 319.6 98.2 464H27.6l168.5-183.3L32 48h146.5l96.7 130.6L389.2 48zM362.3 421.8h39.1L153.7 88.5h-42z"/>
          </svg>
          </a>
         </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
