import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/contact");
  };

  return (
    <section className="ba-section">

      <h2 className="ba-title">Why Choose Octodyna</h2>

      <p className="ba-description">
        Octodyna partners with brands that want more than visibility — they want
        clarity, credibility, and lasting influence. We combine strategic
        insight with powerful storytelling to ensure your brand stands out,
        connects with audiences, and leads in competitive markets.
      </p>

      {/* GRID POINTS */}
      <div className="ba-grid">

        <div className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} />
          Strategic Brand Positioning
        </div>

        <div className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} />
          Impactful Storytelling & PR Narratives
        </div>

        <div className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} />
          Results-Driven Communication Strategies
        </div>

        <div className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} />
          Long-Term Brand Growth Partnership
        </div>

      </div>

      {/* CTA */}
      <button
        className="ba-btn"
        onClick={handleBookAppointmentClick}
      >
        <FontAwesomeIcon icon={faCalendarCheck} />
        Schedule a Strategy Call
      </button>

    </section>
  );
}

export default BookAppointment;