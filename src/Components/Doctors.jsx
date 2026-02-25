import React from "react";
import "../Styles/Doctors.css";

import logo1 from "../Assets/coursera.png";
import logo2 from "../Assets/cal-id.png";
import logo3 from "../Assets/Glasafe_Logo.png";
import logo4 from "../Assets/krisp-ai.png";
import logo5 from "../Assets/packt.svg";
import logo6 from "../Assets/nu-republic.jpg";
import logo7 from "../Assets/pressmaster.jpg";
import logo8 from "../Assets/sweetmate.png";
import logo9 from "../Assets/twin-mind.png";
import logo10 from "../Assets/colors-queen.jpg";
import logo11 from "../Assets/Naukri.png";
import logo12 from "../Assets/topmate.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12
];

function Clients() {
  return (
    <div className="clients-section" id="clients">

      <h2 className="clients-title">Brands That Trust Octodyna</h2>

      <p className="clients-description">
        We’ve partnered with startups, scaling companies, and established
        brands to craft clear positioning, powerful narratives, and
        communication strategies that build credibility and long-term influence.
      </p>

      <div className="clients-grid">
        {logos.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt="Client logo" />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Clients;