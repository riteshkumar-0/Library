import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Reader from "../Demo/reader"

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const response = await axios.get(`http://localhost:1001/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookById(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail container mx-auto  px-4 py-16">
        {book ? <Reader book={book} /> : <div>No book details available.</div>}
    </div>
  );
}

export default BookDetail;
