import React, { useState } from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";
import Demo from "./Demo/Demo";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import About from "./About/About";
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile";
import Request from "./Bookrequest/Request";
import Article from "./Bookrequest/Article";
import Magazine from "./Bookrequest/Magazine";
import Bookreq from "./Bookrequest/Bookreq";
import BookDetail from "./Demo/Bookinformation";
import Listbook from "./List/List";
import Avilability from "./BookAvailable/BookAvailable"


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route
            path="/request"
            element={authUser ? <Request /> : <Navigate to="/signup" />}
          />
          <Route path="/avilability" element={<Avilability />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/bookrequest" element={<Bookreq />} />
          <Route path="/lists" element={<Listbook />} />
          <Route path="/article" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/request" element={<Request />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<Demo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
