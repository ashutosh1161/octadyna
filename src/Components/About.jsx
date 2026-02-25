import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-content">

        <h2 className="about-title">About Octodyna</h2>

        <p className="about-description">
          Octodyna was founded with a simple belief — that strong brands are
          built on clarity, not noise. In an increasingly crowded digital world,
          businesses often struggle not because they lack value, but because
          their message lacks focus and direction.
        </p>

        <p className="about-description">
          We exist to bridge that gap by helping brands articulate their purpose,
          refine their voice, and communicate with confidence. Our work goes
          beyond marketing — we partner with organizations to shape how they are
          perceived, trusted, and remembered.
        </p>

        <h3 className="philosophy-title">Our Philosophy</h3>

<div className="philosophy-grid">

  <div className="philosophy-item">
    <span className="philosophy-icon">✦</span>
    <p>Clarity creates authority</p>
  </div>

  <div className="philosophy-item">
    <span className="philosophy-icon">✦</span>
    <p>Consistency builds trust</p>
  </div>

  <div className="philosophy-item">
    <span className="philosophy-icon">✦</span>
    <p>Storytelling drives connection</p>
  </div>

  <div className="philosophy-item">
    <span className="philosophy-icon">✦</span>
    <p>Strategy drives long-term impact</p>
  </div>

</div>

      </div>
    </section>
  );
}

export default About;