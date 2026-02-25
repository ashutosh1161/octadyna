import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

import bg from "../Assets/bg.jpg"

function Home() {
  return (
    // <div className="home-section">

    <div style={{backgroundColor: "#16090D"}}>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      {/* <Reviews /> */}
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
