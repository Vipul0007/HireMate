import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../services/FetchJobs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  //login
  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      console.log(response);

      setUser(response.data);
      localStorage.setItem("token", response.data.accessToken);
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  //logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
