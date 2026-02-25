import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import logo from "../Assets/logo.png";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [serviceType, setServiceType] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const formRef = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const errors = {};

  //   if (!name.trim()) errors.name = "Your name is required";
  //   if (!phone.trim()) errors.phone = "Phone number required";
  //   if (phone.length !== 10) errors.phone = "Enter valid 10-digit number";
  //   if (!appointmentTime) errors.appointmentTime = "Select a date & time";
  //   if (serviceType === "default") errors.serviceType = "Select service type";

  //   if (Object.keys(errors).length > 0) {
  //     setFormErrors(errors);
  //     return;
  //   }

  //   setName("");
  //   setCompany("");
  //   setPhone("");
  //   setAppointmentTime("");
  //   setServiceType("default");
  //   setFormErrors({});

  //   toast.success("Call Scheduled Successfully!", {
  //     position: toast.POSITION.TOP_CENTER,
  //     onOpen: () => setIsSubmitted(true),
  //     onClose: () => setIsSubmitted(false),
  //   });
  // };

  const handleSubmit = (e) => {
  e.preventDefault();

  const errors = {};

  if (!name.trim()) errors.name = "Your name is required";
  if (!email.trim()) {
  errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
  errors.email = "Enter valid email address";
  }
  if (!phone.trim()) errors.phone = "Phone number required";
  if (phone.length !== 10) errors.phone = "Enter valid 10-digit number";
  if (!appointmentTime) errors.appointmentTime = "Select a date & time";
  if (serviceType === "default") errors.serviceType = "Select service type";

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  emailjs
    .sendForm(
      "service_cekpzjg",      
      "template_40x5fy7",     
      formRef.current,
      "LBj-fghsLEYub3_R8"     
    )
    .then(() => {
      toast.success("Call Scheduled Successfully!", {
        position: "top-center",
      });

      setIsSubmitted(true);

      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setAppointmentTime("");
      setServiceType("default");
      setFormErrors({});
    })
    .catch((error) => {
      console.log(error);
      toast.error("Failed to send. Try again.");
    });
};

  return (
    <div className="appointment-form-section">

      {/* HEADER */}
      <div className="appointment-header">
        <img src={logo} alt="logo" />
        <Link to="/" className="brand-name">OCTADYNA</Link>
      </div>

      {/* FORM */}
      <div className="form-wrapper">
       <div className="form-container">
        <h2 className="form-title">
          Schedule Your Strategy Call
        </h2>

        <form ref={formRef} className="form-content" onSubmit={handleSubmit}>

          <label>
            Full Name
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </label>
          <label>
          Email Address
          <input
            type="email"
            name="user_email"   // VERY IMPORTANT for EmailJS
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
            )}
          </label>

          <label>
            Company / Brand Name
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>

          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
          </label>

          <label>
            Select Service
            <select
              name="service"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="default" >Choose Service</option>
              <option value="branding">Brand Strategy</option>
              <option value="pr">PR & Media Outreach</option>
              <option value="content">Content & Storytelling</option>
              <option value="growth">Growth Consulting</option>
            </select>
            {formErrors.serviceType && <p className="error-message">{formErrors.serviceType}</p>}
          </label>

          <label>
            Preferred Call Time
            <input
              type="datetime-local"
              name="appointmentTime"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </label>

          <button type="submit" className="schedule-btn">
            Schedule Call
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>
            Our team will contact you shortly to confirm your consultation.
          </p>

        </form>
        </div>
      </div>

      <div className="legal-footer">
        © 2026 Octodyna. All rights reserved.
      </div>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;