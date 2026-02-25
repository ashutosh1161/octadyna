import React from "react";
import {
  faBullseye,
  faPenNib,
  faRocket,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Info.css";

function Info() {
  return (
    <section className="services-section" id="services">
      
      <h2 className="services-title">What We Do</h2>

      <div className="services-line"></div>

      <div className="services-container">

        <div className="service">
          <FontAwesomeIcon icon={faBullseye} className="service-icon" />
          <h4>Brand Positioning</h4>
          <p>Define identity, voice, and value to stand out.</p>
        </div>

        <div className="service">
          <FontAwesomeIcon icon={faPenNib} className="service-icon" />
          <h4>PR Content Writing</h4>
          <p>Build credibility through powerful narratives.</p>
        </div>

        <div className="service">
          <FontAwesomeIcon icon={faRocket} className="service-icon" />
          <h4>Product Launch</h4>
          <p>Create awareness and strong market traction.</p>
        </div>

        <div className="service">
          <FontAwesomeIcon icon={faChartLine} className="service-icon" />
          <h4>Communication Strategy</h4>
          <p>Integrated plans aligned with growth goals.</p>
        </div>

        
      </div>

      <div className="approach-section">
  <h3>Our Approach</h3>
  <p>
    At Octodyna, we combine strategic thinking with powerful storytelling
    to help brands communicate with clarity and confidence.
  </p>

  <div className="approach-steps">
    <div>
      <h4>Discover & Position</h4>
      <p>Understand brand vision and define strategy.</p>
    </div>

    <div>
      <h4>Craft & Communicate</h4>
      <p>Create compelling narratives that connect.</p>
    </div>

    <div>
      <h4>Amplify & Grow</h4>
      <p>Execute strategies that build credibility.</p>
    </div>
  </div>
</div>

    </section>
  );
}

export default Info;