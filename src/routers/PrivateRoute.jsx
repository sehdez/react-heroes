import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {

  const location = useLocation();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("lastLocation", location.pathname + location.search);
    
  }, [location]);
  
  
  return user.logged 
            ? children
            : <Navigate to="/login" />;
}
