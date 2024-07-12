import React from "react";
import Home from "./home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Demo from "./Demo/Demo";
import Signup from "./components/Signup";
import Login from "./components/Login"

import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./About/About";

import Contact from "./contact/Contact";
import Profile from "./Profile/Profile"

import Article from "./Bookrequest/Article"
import Magazine from "./Bookrequest/Magazine";
import Bookreq from "./Bookrequest/Bookreq"
import Found from "./Search/found"
import BookDetail from "./Demo/Bookinformation";


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
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/found" element={<Found />} />

          <Route path="/bookrequest" element={<Bookreq />} />
          
          <Route path="/article" element={<Article />} />
          <Route path="/about" element={<About />} />

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
