import React, { useState } from "react";
import axios from "axios";
import Card from "../Components/Cards";
import { NavLink } from "react-router-dom";

const Avilability = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query.trim()) {
      try {
        const response = await axios.get(
          `http://localhost:1001/book/search/${query}`
        );
        setResults(response.data);
        setSearched(true);
      } catch (error) {
        console.error("Error searching for books:", error);
        setResults([]);
        setSearched(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-800 dark:text-white">
      <header className="w-full flex justify-end py-4 fixed top-0 z-10">
        <NavLink
          to="/"
          className="btn btn-lg btn-circle btn-ghost text-red-600"
        >
          <h1 className="text-4xl">X</h1>
        </NavLink>
      </header>
      <div className="w-full max-w-xs mt-20 fixed top-0 left-1/2 transform -translate-x-1/2">
        <form onSubmit={handleSearch} className="w-full">
          <label className="px-3 py-2 border rounded-md border-orange-500 flex items-center gap-2 w-full">
            <input
              type="text"
              className="w-full outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
              placeholder="Book Name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-10 h-10 opacity-90 cursor-pointer"
              onClick={handleSearch}
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>
      <div className="w-full px-4 mt-32">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((book) => (
              <Card key={book._id} item={book} />
            ))}
          </div>
        ) : (
          searched && <p className="text-center">No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Avilability;
