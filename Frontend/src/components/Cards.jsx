import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function Cards({ item }) {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [authUser] = useAuth();

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get("http://localhost:1001/lists");
      setLists(response.data);
    } catch (error) {
      console.error("Error fetching lists", error);
    }
  };


const handlePlusClick = () => {
  if (!authUser) {
    alert("Please log in to add books to a list.");
    return;
  }
  setShowModal(true);
};

  const addBookToList = async () => {
    if (!selectedListId) {
      alert("Please select a list to add the book to.");
      return;
    }
    try {
      await axios.post(`http://localhost:1001/lists/${selectedListId}/book`, {
        bookId: item._id,
      });
      alert("Book added to the list successfully!");
      setShowModal(false);
      setSelectedListId("");
    } catch (error) {
      console.error("Error adding book to list", error);
    }
  };

  return (
    <div className="relative mt-2 my-3 p-3">
      <div className="card w-72 h-96 bg-base-100 shadow-xl hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-auto">
          <img
            src={item.image}
            alt="Item"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary">{item.category}</div>
          <h3 className="card-title">{item.bookname}</h3>
          <div className="badge badge-primary justify-end">
            {item.authorname}
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline mt-2">Rs.{item.price}</div>
            <div
              className="rounded-md hover:bg-orange-800 hover:text-white cursor-pointer"
              onClick={handlePlusClick}  
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 opacity-90"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
              </svg>
            </div>
          </div>
          <div className="cursor-pointer px-2 py-1 w-2/3 m-auto text-center rounded-full border-[2px] hover:bg-orange-800 hover:text-white duration-200 mt-2">
            <Link to={`/book/${item._id}`}>Explore book</Link>
          </div>
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-lg font-semibold mb-4">Select a List</h2>
            <select
              value={selectedListId}
              onChange={(e) => setSelectedListId(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            >
              <option value="">Select List</option>
              {lists.map((list) => (
                <option key={list._id} value={list._id}>
                  {list.name}
                </option>
              ))}
            </select>
            <button
              onClick={addBookToList}
              className="w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Add Book to List
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2 mt-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;

