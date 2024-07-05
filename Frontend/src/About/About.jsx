import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className=" py-16  m-auto">
        <Navbar />
        <div className="container justify-center m-auto px-6 py-10 text-white md:px-12 xl:px-6">
          <div className="space-y-0 md:space-y-0 md:flex flex-col md:gap-6 lg:items-center lg:gap-12">
            <div className="md:6/12 lg:w-6/12">
              <img src="About.jpg" alt="image" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-cyan-700 font-bold md:text-4xl">
                WeTalk connect the people
              </h2>
              <p className="mt-6 text-gray-600">
                Build a more connected Innovation, reliability, and
                user-centricity are the pillars upon which "We Talk" builds its
                services. The company continually explores emerging technologies
                and trends to enhance its offerings, ensuring that it remains at
                the cutting edge of the communication sector. With a keen eye on
                the future, "We Talk" is not just about facilitating
                conversations; it's about creating connections that inspire
                change, drive progress, a world.
              </p>
              <p className="mt-4 text-gray-600">
                Whether you're looking to stay in touch with loved ones,
                collaborate with colleagues, or engage with a global community,
                "We Talk" provides the platform and the tools to make every
                interaction count. With "We Talk," it's not just about talking;
                it's about making every word matter.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
