import React from "react";
import Navbar from "../Components/Navbar";
import Demo from "../Components/Demo";
import Footer from "../Components/Footer";
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
