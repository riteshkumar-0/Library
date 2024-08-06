import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import User from "../../public/user.jpg";
import { useAuth } from "../Context/AuthProvider";
import Editprofile from "./Editprofile";

const Profile = () => {
  const [authUser] = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-xs lg:max-w-2xl mt-36 flex-col justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 m-4">
          <div className="flex justify-end">
            <button onClick={toggleEditMode} className="p-2">
              {isEditing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 opacity-90 cursor-pointer"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8H6v8zM19 6h-4.5l-.71-.71c-.18-.18-.44-.29-.71-.29H10.93c-.27 0-.53.11-.71.29L9.5 6H5v2h14V6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 opacity-90 cursor-pointer"
                >
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
              )}
            </button>
          </div>
          {isEditing ? (
            <Editprofile toggleEditMode={toggleEditMode} />
          ) : (
            <div className="flex justify-center flex-col lg:flex-row lg:space-x-4">
              <img
                className="w-16 h-16 lg:h-44 lg:w-44 rounded-full flex justify-center object-cover mx-auto my-auto lg:mx-0"
                src={authUser.avatar || User}
                alt="User avatar"
              />
              <div className="text-center lg:text-left mt-4 lg:mt-0">
                <h1 className="text-3xl flex justify-center font-medium underline text-gray-800 dark:text-white">
                  Profile
                </h1>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {authUser.fullname}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <h3 className="text-lg font-medium underline text-gray-800 dark:text-white">
                    UserId:
                  </h3>
                  {authUser.email}
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-medium underline text-gray-800 dark:text-white">
                    About
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {authUser.about}
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium underline text-gray-800 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {`${authUser.city}, ${authUser.state}, ${authUser.country}`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
