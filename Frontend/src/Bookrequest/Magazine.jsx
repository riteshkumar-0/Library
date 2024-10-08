import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Magazine() {
  const [magazineName, setMagazineName] = useState("");
  const [publishercompany, setpublishercompany] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("magazineName", magazineName);
    formData.append("publishercompany", publishercompany);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:1001/request/magazine",
        formData
      );
      console.log(response.data);
      toast.success("Magazine added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error adding magazine!");
    }
  };

  return (
    <div className="max-w-60 mx-auto my-10 justify-center  p-4 bg-red-300 dark:bg-slate-900 dark:text-white md:max-w-96">
      <h2 className="text-lg text-black justify-center flex  font-bold mb-4">
        Magazine
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Magazine Name
            </label>
            <input
              type="text"
              value={magazineName}
              onChange={(e) => setMagazineName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter magazine name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Publisher Company
            </label>
            <input
              type="text"
              value={publishercompany}
              onChange={(e) => setpublishercompany(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter publisher company name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter category"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Magazine Cover
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Request
        </button>
      </form>
    </div>
  );
}

export default Magazine;
