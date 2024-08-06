import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Demo() {
  const [book, setBook] = useState([]);

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
          <div className="mt-18 items-start  justify-center my-10 text-center"></div>
          <div>
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
