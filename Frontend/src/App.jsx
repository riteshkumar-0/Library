import React from "react";
import Home from "./home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Demo from "./Demo/Demo";
import Signup from "./components/Signup";

import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./About/About";
import Notes from "./Notes/Notes";
import Contact from "./contact/Contact";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/book"
            element={authUser ? <Demo /> : <Navigate to="/signup" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
