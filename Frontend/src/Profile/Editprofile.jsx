import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Editprofile = ({ toggleEditMode }) => {
  const [authUser, setAuthUser] = useAuth();
  const [formData, setFormData] = useState({
    fullname: authUser.fullname || "",
    email: authUser.email || "",
    avatar: authUser.avatar || "",
    lastname: authUser.lastname || "",
    about: authUser.about || "",
    country: authUser.country || "",
    streetaddress: authUser.streetaddress || "",
    city: authUser.city || "",
    state: authUser.state || "",
    postalcode: authUser.postalcode || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:1001/user/profile/${authUser._id}`,
        formData
      );
      // Update the authUser context with the new data
      setAuthUser(response.data.user);
      localStorage.setItem("Users", JSON.stringify(response.data.user));
      toast.success("Update Successfully");
      toggleEditMode(); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error: " + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.email}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="3"
                  className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-700 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white dark:bg-gray-800 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        value={formData.avatar}
                        onChange={handleChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
                    JPG up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent ring-1 py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full flex-1 border-0 bg-transparent ring-1 py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent ring-1 py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>India</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="streetaddress"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetaddress"
                  id="streetaddress"
                  value={formData.streetaddress}
                  onChange={handleChange}
                  className="block w-full flex-1 border-0 bg-transparent ring-1 py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="block  w-full flex-1 border-0 bg-transparent ring-1 py-1.5 pl-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 ring-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="postalcode"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalcode"
                  id="postalcode"
                  value={formData.postalcode}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 ring-1 focus:ring-0 text-gray-900 placeholder:text-gray-400  dark:bg-gray-800 dark:text-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Editprofile;
