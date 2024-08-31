import React,{ useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="py-16 m-auto">
          <Navbar />
          <div className="container justify-center m-auto px-6 py-10 text-white md:px-12 xl:px-6">
            <div className="space-y-0 md:space-y-0 md:flex flex-col md:gap-6 lg:items-center lg:gap-12">
              <div className="md:6/12 lg:w-6/12">
                <img src="About.jpg" alt="About" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-cyan-700 font-bold md:text-4xl">
                  Welcome to MyLibrary
                </h2>
                <p className="mt-6 text-gray-600">
                  Your ultimate online destination for all things books! Our
                  website is designed to be a paradise for book lovers,
                  providing a comprehensive platform where you can explore,
                  discover, and indulge in your passion for reading. Whether
                  you're searching for the latest bestsellers, classic
                  literature, or niche genres, Book Haven has it all. Our
                  easy-to-use search functionality ensures you can quickly check
                  the availability of any book, while our intuitive interface
                  allows you to request books that are currently unavailable.
                  Dive into the world of reading with our seamless online
                  reading feature, which lets you enjoy your favorite books
                  directly on the site. Plus, our dedicated contact section is
                  always open for any queries or issues you might encounter. At{" "}
                  <b className="text-red-600">MyLibrary</b>, we strive to create
                  a welcoming community for readers of all ages and interests.
                  Happy reading!
                </p>
                <p className="mt-4 text-gray-600"></p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default About;
