import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

//   const login = (user) => {
//     localStorage.setItem("Users", JSON.stringify(user));
//     setAuthUser(user);
//   };

//   const logout = () => {
//     localStorage.removeItem("Users");
//     setAuthUser(undefined);
//   };

//   return (
//     <AuthContext.Provider value={{ authUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);