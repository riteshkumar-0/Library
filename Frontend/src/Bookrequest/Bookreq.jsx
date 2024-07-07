import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Bookreq = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="grid ">
        <ul  tabIndex={0}>
          <li>
            <a href="">
              Main
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
            Book request
            </a>
          </li>
        </ul>
        </div>
       



      </div>
      <Footer />
    </>

  );
};
export default Bookreq;
