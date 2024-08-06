import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function Article() {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const articleData = {
      title,
      publisher,
      category,
    };

    try {
      const response = await axios.post(
        "http://localhost:1001/request/article",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(articleData),
        }
      );
      if (response.ok) {
        setTitle("");
        setPublisher("");
        setCategory("");
        toast.success("We will notify you as soon as possible");
      } else {
        throw new Error("Failed to submit article request");
      }
    } catch (error) {
      console.error("Error submitting article request:", error);
      toast.error("Failed to submit article request");
    }
  };

  return (
    <div className="max-w-60 mx-auto my-10 justify-center p-4 bg-red-300 dark:bg-slate-900 dark:text-white md:max-w-96">
      <h2 className="text-lg font-bold text-black flex justify-center mb-4">
        Article
      </h2>
      {message && <div className="mb-4 text-center text-white">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter title"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Publisher Name
            </label>
            <input
              type="text"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter publisher name"
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

export default Article;
