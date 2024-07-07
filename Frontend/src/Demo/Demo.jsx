import React from "react";
import Navbar from "../components/Navbar";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
function Demos() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Demo />
      </div>
      <Footer />
    </>
  );
}

export default Demos;
