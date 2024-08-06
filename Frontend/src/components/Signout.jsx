import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

function Signout() {
  const [authUser, setAuthUser] = useAuth(); 

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      localStorage.removeItem("loginTimestamp");
      toast.success("SignOut successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 1000);
    }
  };

  useEffect(() => {
    const logoutAfterTimeout = () => {
      const loginTimestamp = localStorage.getItem('loginTimestamp');
      if (loginTimestamp) {
        const elapsedTime = Date.now() - parseInt(loginTimestamp, 10);
        const maxSessionTime = 2 * 60 * 60 * 1000; 

        if (elapsedTime >= maxSessionTime) {
          handleLogout();
        } else {
          setTimeout(handleLogout, maxSessionTime - elapsedTime);
        }
      }
    };

    logoutAfterTimeout();

   
    return () => clearTimeout(logoutAfterTimeout);

  }, []); 

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Signout;
