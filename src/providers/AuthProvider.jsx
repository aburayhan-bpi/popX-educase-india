import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [loading, setLoading] = useState(true);

  const createUser = (userInfo) => {
    setLoading(true);

    // Generate random ID
    const userId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    // Create user object with ID
    const userWithId = {
      ...userInfo,
      id: userId,
      createdAt: new Date().toISOString(), // Add creation timestamp
    };

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the array
    const updatedUsers = [...existingUsers, userWithId];

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Also store current user separately
    localStorage.setItem("currentUser", JSON.stringify(userWithId));
    setUser(userWithId);
    setLoading(false);
    return { account_created: true };
  };

  const loginUser = (email, password) => {
    setLoading(true);
    const allUser = JSON.parse(localStorage.getItem("users"));
    // Match user
    const validUser = allUser.filter(
      (user) => user?.email === email && user?.password === password
    );
    if (!validUser[0]) {
      return { isLogged: false };
    } else if (validUser[0]) {
      setUser(validUser[0]);
      localStorage.setItem("currentUser", JSON.stringify(validUser[0]));
      return { isLogged: true };
    }
  };

  // console.log("current user", user);

  const allInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
