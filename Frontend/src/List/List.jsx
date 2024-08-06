import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const List = () => {
  const [lists, setLists] = useState([]);
  const [books, setBooks] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [selectedListId, setSelectedListId] = useState("");
  const [selectedListBooks, setSelectedListBooks] = useState([]);
  const [selectedListName, setSelectedListName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get("http://localhost:1001/lists/");
      setLists(response.data);
    } catch (error) {
      console.error("Error fetching lists", error);
    }
  };

  const createList = async () => {
    try {
      const response = await axios.post("http://localhost:1001/lists/", {
        name: newListName,
      });
      setLists([...lists, response.data]);
      setNewListName("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating list", error);
    }
  };

  const addBookToList = async () => {
    try {
      await axios.post(`http://localhost:1001/lists/${selectedListId}/book`, {
        bookId: newBookId,
      });
      fetchBooksFromList(selectedListId);
      setNewBookId("");
    } catch (error) {
      console.error("Error adding book to list", error);
    }
  };

  const fetchBooksFromList = async (listId, listName) => {
    try {
      const response = await axios.get(
        `http://localhost:1001/lists/${listId}/books`
      );
      setBooks(response.data);
      setSelectedListBooks(response.data);
      setSelectedListId(listId);
      setSelectedListName(listName);
      setIsSidebarOpen(false); // Close sidebar on list selection
    } catch (error) {
      console.error("Error fetching books from list", error);
    }
  };

  const deleteBookFromList = async (listId, bookId) => {
    try {
      await axios.delete(
        `http://localhost:1001/lists/${listId}/book/${bookId}`
      );
      fetchBooksFromList(listId);
    } catch (error) {
      console.error("Error deleting book from list", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-16 lg:mt-24 lg:flex-row h-lvh mb-0 lg:mb-0 bg-gray-100 dark:bg-gray-900">
        {/* Sidebar toggle button for small devices */}
        <div className="lg:hidden flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900 dark:text-white">
          <h1 className="text-xl font-medium">List Manager</h1>
          <button
            className="text-xl focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>

        {/* Left side box */}
        <div
          className={`fixed inset-0 mt-20 lg:mt-0 z-40 lg:static lg:translate-x-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:w-1/4 bg-gray-200 dark:bg-gray-600 dark:text-white p-4`}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-base lg:text-3xl font-medium underline dark:text-white text-gray-800">
              Lists-Name
            </h1>

            <div className="flex items-center dark:bg-cyan-500 rounded-3xl lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8 h-8 opacity-90 cursor-pointer transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
              </svg>
            </div>

            <div className="hidden lg:flex rounded-3xl dark:bg-amber-400 bg-lime-500 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-8 h-8 opacity-90 cursor-pointer transition-colors duration-300 hover:rounded-3xl hover:bg-red-500 dark:text-white text-black"
                onClick={() => setIsModalOpen(true)}
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
              </svg>
            </div>
          </div>

          <ul className="mt-5">
            {lists.map((list) => (
              <li key={list._id} className="mt-2 text-xl">
                <span
                  onClick={() => fetchBooksFromList(list._id, list.name)}
                  className="cursor-pointer"
                >
                  {list.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side area */}
        <div className="flex-1 h-auto bg-white text-black dark:bg-gray-900 dark:text-white p-4">
          <h3 className="text-xl flex mt-10 justify-center underline font-medium mb-4">
            {selectedListName}
          </h3>
          <ul className="list-decimal pl-8">
            {selectedListBooks.map((book) => (
              <li
                key={book._id}
                className="flex justify-between items-center lg:mx-40 mt-2 p-4 border border-gray-100  rounded-md dark:bg-gray-900 bg-white shadow-sm"
              >
                <span className="mx-6">{book.bookname}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 opacity-90 cursor-pointer hover:text-red-700"
                  onClick={() => deleteBookFromList(selectedListId, book._id)}
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8H6v8zM19 6h-4.5l-.71-.71c-.18-.18-.44-.29-.71-.29H10.93c-.27 0-.53.11-.71.29L9.5 6H5v2h14V6z" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl dark:text-black mb-4">Create New List</h2>
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="New List Name"
              className="p-2 border border-gray-300 rounded w-full"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mr-2 p-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={createList}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default List;
