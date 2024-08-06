import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Demo() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:1001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:1001/book");

        setBook(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className=" max-w-screen-2xl container mt-10 md:px-20 px-4 py-16">
          <div className="mt-18 items-start  justify-center my-10 text-center">
            <p className="mt-12">
              Our website offers a wide selection of books across various
              genres, ensuring you find your desired titles easily. Enjoy
              seamless browsing, secure purchases, and prompt delivery right to
              your doorstep.
            </p>
            <h1 className="text-xl  md:text-2xl">
              <div className="flex justify-center my-10">
                <label
                  className="px-3 py-2 border  rounded-md border-orange-500
        flex items-center gap-2 w-1/2 max-w-xs"
                >
                  <input
                    type="text"
                    className="w-full outline-none rounded-md px-1
             dark:bg-slate-900 dark:text-white
             "
                    placeholder="Book Name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-10 h-10 opacity-90 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </h1>
          </div>
          <div>
            <div className="text-2xl ">Popular Book</div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
              {book.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Demo;
