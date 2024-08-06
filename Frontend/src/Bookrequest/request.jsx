import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Article from "./Article";
import Magazine from "./Magazine";
import Bookreq from "./Bookreq";

const MainPage = () => {
  const [activeComponent, setActiveComponent] = useState("Bookreq");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 justify-start items-center p-4">
      <header className="w-full flex justify-end py-4 fixed top-0 z-10">
        <NavLink
          to="/"
          className="btn btn-lg btn-circle btn-ghost text-red-600"
        >
          <h1 className="text-4xl">X</h1>
        </NavLink>
      </header>

      <nav className="flex justify-center mt-20 mb-6 w-full">
        <ul className="flex space-x-4 text-black text-sm md:text-xl">
          <li>
            <button
              onClick={() => handleComponentChange("Bookreq")}
              className={`px-4 py-2 rounded-md ${
                activeComponent === "Bookreq"
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-black"
              } transition duration-300 ease-in-out`}
            >
              Book Request
            </button>
          </li>
          <li>
            <button
              onClick={() => handleComponentChange("Article")}
              className={`px-4 py-2 rounded-md ${
                activeComponent === "Article"
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-black"
              } transition duration-300 ease-in-out`}
            >
              Article
            </button>
          </li>
          <li>
            <button
              onClick={() => handleComponentChange("Magazine")}
              className={`px-4 py-2 rounded-md ${
                activeComponent === "Magazine"
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-black"
              } transition duration-300 ease-in-out`}
            >
              Magazine
            </button>
          </li>
        </ul>
      </nav>

      <div className="w-full max-w-3xl p-4 bg-white rounded-md shadow-md mt-4">
        {activeComponent === "Bookreq" && <Bookreq />}
        {activeComponent === "Article" && <Article />}
        {activeComponent === "Magazine" && <Magazine />}
      </div>
    </div>
  );
};

export default MainPage;
