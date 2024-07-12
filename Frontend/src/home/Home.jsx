import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Newsletter from "../components/newsletter"
import Footer from "../components/Footer";
import Contact from "../contact/Contact";
import Popularbook from "../components/Popularbook";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Popularbook />
      <Newsletter />
     
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
