import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

import bg from "../Assets/bg.jpg"

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    // <div
    //   className="min-h-screen bg-cover bg-center"
    //   style={{ backgroundImage: `url(${bg})` }}  
    // >
      <div className="hero-bg">
      <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          {/* <p className="text-headline">
            ❤️ Health comes first
          </p>
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p> */}

          <h2 className="text-title">
            Build Clarity <br />
            Shape Perception <br />
            Lead Your Market
          </h2>

          <p className="text-descritpion">
            Octodyna helps brands stand out through strategic positioning, powerful storytelling, and impactful communication. From PR narratives to product launches, we craft messages that create credibility, connection, and long-term brand influence.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Schedule a Call
          </button>
          <div className="text-stats">

            <div className="text-stats-container">
              <p>100+</p>
              <p>Brands Positioned</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Successful Campaigns Delivered</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div> */}
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
    </div>
  );
}

export default Hero;
