import React from "react";
import banner from "../../public/home2.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8 md:m-auto">
            <h1 className="text-2xl md:text-4xl font-bold">
              welcomes here, find something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xs md:text-lg">
              My library is a collection of resources, such as books, journals,
              and digital media, organized for easy access and reference. It
              serves as a hub for information, learning, and community
              engagement, offering services like reading areas, research
              assistance, and educational programs. Libraries support lifelong
              learning, preserve cultural heritage, and provide a quiet space
              for study and reflection. They are essential for fostering
              literacy, knowledge, and community development.
            </p>
          </div>
        </div>
        <div className=" order-1 w-full mt-20  md:w-1/2 h-1/2   m-auto">
          <img
            src={banner}
            className="  md:w-[550px] md:h-[460px] md:ml-6 mt-auto"
            alt=""
          />
        </div>
      </div>

     
    </>
  );
}

export default Banner;
